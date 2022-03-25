const { request } = require("express");
var mysql=require("mysql");
const express=require("express");
var app =express();
const bodyparser=require("body-parser")

app.use(bodyparser.json)


var mysqlconnection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Navgurukul@123",
    database:"myapp"
});

mysqlconnection.connect((err)=>{
    if(!err)
    console.log("db connection succesfuly")
    else
    console.log("db connection faIL\n Error:"+JSON.stringify(err,undefined,2));

})
app.listen(3000,()=>console.log("express server is runing at port no: 3000"))

app.get("/empoloyees",(req,res)=>{
    mysqlconnection.query("SELECT * FROM Employee",(err,rows,fields)=>{
        if(!err)
        console.log(rows);
        else
        console.log(err);
    })
})