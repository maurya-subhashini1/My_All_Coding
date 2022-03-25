const express=require('express')
const router=express.Router();


const {get,post}=require("../controller/app")

router.get("/api/get",get)

router.post("/registion",post)

module.exports=router;