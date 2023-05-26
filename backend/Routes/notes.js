const User =require('../models/Notes.js');
const express =require("express");
const router=express.Router();
const jwt=require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const fetchuser = require("../middleware/fetchuser.js");
const Notes = require('../models/Notes.js');


router.get('/getnotes', fetchuser,async (req,res)=>{
  try{
    const notes= await Notes.find({
      user:req.user.id
    });
    res.json(notes);
  }
  catch(error){
    console.error(error.massage);
    res.status(500).send("some error accured");
  }
})
router.post('/addnotes',[
    body('title' ,'enter title').isLength({ min: 3 }),
    body('description','Enter description').isLength({min:3}),
], fetchuser,
async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }
    try{
      const notes= await User.create({
        title: req.body.title,
        description: req.body.description,
        tag: req.body.tag,
        user:req.user.id
      });
      const savenotes=await notes.save();
      res.json(savenotes);
    }
    catch(error){
      console.error(error.massage);
      res.status(500).send("some error accured");
    }
  })

  router.put('/updatenotes/:id', fetchuser,async (req,res)=>{
    const {title,description,tag}=req.body;
    try {
      
   
    const updatenotes={};
    if(title){updatenotes.title=title};
    if(description){updatenotes.description=description};
    if(tag){updatenotes.tag=tag};
    let note=await Notes.findById(req.params.id);
    if(!note){
      return res.status(404).send("Not found");
    }
    if(note.user.toString()!==req.user.id){
      return res.status(401).send("Only access your notes");
    }

    note = await Notes.findByIdAndUpdate(req.params.id,{$set:updatenotes},{new:true});
    res.json({note});
  }
  catch(error){
    console.error(error.massage);
    res.status(500).send("some error accured");
  }
  })


  router.delete('/deletenotes/:id', fetchuser,async (req,res)=>{
    try {
      
    let note=await Notes.findById(req.params.id);
    if(!note){
      return res.status(404).send("Not found");
    }
    if(note.user.toString()!==req.user.id){
      return res.status(401).send("Only access your notes");
    }
    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({"success":"success fully deleted",note:note});
  }
  catch(error){
    console.error(error.massage);
    res.status(500).send("some error accured");
  }
  })


  module.exports=router