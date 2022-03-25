const { query } = require("express");
const express=require("express");

const connection=require("../connection")
const router=express.Router();

router.post("/create",(req,res,next)=>{
    let product=req.body;
    query="insert into product(name,description,price)values ?";
    var sql
    connection.query(query,[product.name,product.description,product.price],(err,results)=>{
        if(!err){
            return res.status(200).json({message:"product added succesfuly"});

        }
        else
        return res.status(500).json(err);
        
    })
})


module.exports=router;