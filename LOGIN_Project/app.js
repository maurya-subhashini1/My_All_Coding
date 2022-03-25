const express=require("express");
const res = require("express/lib/response");
const path=require("path")
const pageRouter=require("./routes/pages");

const app=express();

//for body parser
app.use(express.urlencoded({extended:false}))

// server static file
app.use(express.static(path.join(__dirname,"public")));

// temlate engine

app.set("viwes",path.join(__dirname,"viwes"));
app.set('view engine','pug');

//routers
app.use("/",pageRouter);

//errors
app.use((req,res,next)=>{
    var err=new Error("Page not found");
    err.status=404;
    next(err)
})

//handling errors
app.use((err,req,res,next)=>{
    res.status(err.status ||500);
    res.send(err.message);
})
// setting up the server

app.listen(3000,()=>{
    console.log("server runing on port 3000...");
})

module.exports=app