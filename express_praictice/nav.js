const express=require("express");
const app=express.Router();
const port=300;

app.get("/",(req,res)=>{
    res.send("welcome to my home page")
});

app.get("/",(req,res)=>{
    res.send("welcome to my home page")
});
app.get("/about",(req,res)=>{
    res.send("welcome to my about page")
})


app.listen(port,()=>{
    console.log(`listing to the port no ${port}`);
})