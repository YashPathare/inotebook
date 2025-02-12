const express=require('express');
const router =express.Router();
var fetchUser=require('../middleware/fetchUser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');
//ROUTE 1: Get all the notes using Get: "/api/auth/getUser". Login required

//52 2:02
router.get('/fetchallnotes',fetchUser,async (req,res)=>{
    try {
    const notes= await Notes.find({user:req.user.id});
    res.json(notes)
} catch (error) {
    console.error(error.message); 
      res.status(500).send("Internal Server Error");        
}
})

//ROUTE 2: Add a new Note using: Get "/api/auth/addNote". Login required 

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
} catch (error) {
    console.error(error.message); 
      res.status(500).send("Internal Server Error");        
}  
    }
)

module.exports=router