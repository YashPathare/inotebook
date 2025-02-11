const express=require('express');
const router =express.Router();
var fetchUser=require('../middleware/fetchUser');
const Notes = require('../models/Notes');
//ROUTE 1: Get all the notes using Get 

//52 2:02
router.get('/fetchallnotes',fetchUser,async (req,res)=>{
    const notes= await Notes.find({user:req.user.id});
    res.json(notes)

})

module.exports=router