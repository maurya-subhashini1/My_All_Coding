const express=require('express');
// const { append } = require("express/lib/response");
const mysql=require('mysql')
//create connection
const db=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"Navgurukul@123",
    database:"ujjwal"
});

db.connect((err) =>{
    if(err)
    {
        throw err;

    }
    console.log("mysql connected...")
})
const app=express()

//create db

app.get("/createdb",(req,res)=>{
    let sql="CREATE DATABASE ujjwal";
    db.query(sql,(err,result)=>{
        res.send("database created..")
    })
})
//create table
app.get("/createtable",(req,res)=>{
    let sql="CREATE TABLE USER(id int AUTO_INCREMENT,name VARCHAR(255),lastname VARCHAR(255),pssword VARCHAR(255)";
    db.query(sql,(err,result)=>{
        if(err)throw err;
        console.log(result);
        res.send("user table create..")
    });
});

//inserted data

// app

// if (err) throw err;
//     console.log("Connected!");
//     const user=require('readline-sync')
//     const name=user.question('Enter the name')
//     const address=user.question('Enter the address')
//     const passwrod=user.question('Enter the password')
//     const DOB=user.question('Enter the DOB')
//     const Emailid=user.question('Enter the email')


//     var sql = "INSERT INTO Login (name, address,passwrod,DOB,Emailid) VALUES ?";
//     var value=[[name,address,passwrod,DOB,Emailid]]
//     con.query(sql,[value] ,function (err, result) {
//         if (err) throw err;
//         console.log("data inserted");
//     });







app.listen('3000',()=>{
    console.log("server stated on port 3000")
});
