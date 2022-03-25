const express=require('express');
const User=require("../core/user")
const router=express.Router();

//get index page
router.get("/",(req,res,next)=>{
    res.render("index",{title:"My application"});

});

//get home page
router.get("/home",(req,res,next)=>{
    res.send("this is home page")
})

router.post("/login",(req,res,next)=>{
    res.json(req.body)
})

module.exports=router