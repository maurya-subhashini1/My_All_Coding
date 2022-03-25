const express=require("express")

const app=express();
app.get("/",(req,res)=>{
    res.send("hello word from thwe express")
})

app.get("/about",(requ,res)=>{
    res.send("hello word the from about")
})

app.listen(8000,()=>{
    console.log("listing the port at 800")
})