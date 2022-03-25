const express=require("express");
const con=require("./creatdatabase")
const app=express();

app.use(express.json())
app.get("/",(req,res)=>{
    con.query("select * from Login",(err,result)=>{
        if(err){
            res.send("error in api")
        }else{
            res.send(result)
        }
    })
    
});


app.post('/',(req,res)=>{
    const data=req.body
    // const data={name:"bhasker",address:"kabran", passwrod:"3030",DOB:"2/2/2002",Emailid:"asdfgoj"};
    con.query("INsert INTO Login SET ?",data,(error,result,fields)=>{
        if(error) error;
        res.send(result)
    })
})
app.listen(5000)



























//create table

// const express=require("express");
// const con=require("./creatdatabase")
// const app=express();
// app.get("/createtb",(req,res)=>{
// let sql="CREATE TABLE USER(id int AUTO_INCREMENT,name VARCHAR(255),lastname VARCHAR(255),pssword VARCHAR(255)";
// con.query(sql,(err,result)=>{
//     if(err)throw err
//     console.log(result)
//     res.send("USER table create..")

// })


// // });

// app.listen(5000)