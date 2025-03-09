const express=require('express');
const router =express.Router();
var fetchUser=require('../middleware/fetchUser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');
//ROUTE 1: Get all the notes using Get: "/api/notes/getUser". Login required

router.get('/fetchallnotes',fetchUser,async (req,res)=>{
    try {
        const notes= await Notes.find({user:req.user.id});
        res.json(notes)
    } 
    catch (error) {
        console.error(error.message); 
        res.status(500).send("Internal Server Error");        
    }
})

//ROUTE 2: Add a new Note using: Get "/api/notes/addNote". Login required 

router.post('/addnote',fetchUser,[
        body('title','Enter a valid title.').isLength({ min: 3 }),
        body('description','Description must be atleast 5 characters').isLength({ min: 5 }),
    ],async (req,res)=>{
    try {    
        const {title,description,tag}=req.body;
        // If there are errors return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) 
        {
            return res.status(400).json({ errors: errors.array()});
        }
        const note =new Notes({
            title,description,tag, user:req.user.id    
        })
        const savedNote= await note.save()
        res.json(savedNote) 
    } 
    catch (error) {
        console.error(error.message); 
        res.status(500).send("Internal Server Error");        
    }  
})

//ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote". Login required 
router.put('/updatenote/:id',fetchUser,async (req,res)=>{
    const {title,description,tag}=req.body;
    try 
    {
        //Create a newnote object
        const newNote={};
        if(title)
        {
            newNote.title=title
        };
        if(description)
        {
            newNote.description=description
        };
        if(tag)
        {
            newNote.tag=tag
        };

        //Find the note to be updated and update it.
        let note=await Notes.findById(req.params.id);
        if(!note)
        {
            res.status(404).send("Note Found")
        }
        if(note.user.toString()!==req.user.id)
        {
            return res.status(401).send("Not Allowed");
        }
        note=await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
        res.json({note});
    } 
    catch (error) 
    {
        console.error(error.message); 
        res.status(500).send("Internal Server Error");    
    }
})

//ROUTE 4: Update an existing Note using: DELETE "/api/notes/deletenote". Login required 
router.delete('/deletenote/:id',fetchUser,async (req,res)=>{
    const {title,description,tag}=req.body;
    
    try 
    {
        //Find the note to be updated and update it.
        let note=await Notes.findById(req.params.id);
        if(!note)
        {
            res.status(404).send("Note Found")
        }

        //Allow deletion only if user own this Note
        if(note.user.toString()!==req.user.id)
        {
            return res.status(401).send("Not Allowed");
        }

        note=await Notes.findByIdAndDelete(req.params.id)
        res.json({"Sucess":"Note has been deleted",note: note});
    } 
    catch (error) 
    {
        console.error(error.message); 
        res.status(500).send("Internal Server Error");       
    }
})

module.exports=router