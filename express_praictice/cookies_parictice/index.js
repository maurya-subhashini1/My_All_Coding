var express=require("express");
var cookieparser=require("cookie-parser");
// const { cookie } = require("express/lib/response");

var app=express();

app.use(cookieparser());
app.get("/",function(req,res){
    // res.cookie("cookie1","yogesh maurya").send("cookie has been set");
    res.cookie("cookie1","charma",{expire:Date.now()+36000}).send("cookie has been set")
})


app.get("/show",function(req,res){
    res.send(req.cookies)
})

app.get("/delete",function(req,res){
    res.clearCookie("cookie1").send("cookie1 has been deleted")
    
})
app.listen(4000)