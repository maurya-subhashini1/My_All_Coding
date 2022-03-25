const knex=require("../model/db")
const bcrypt = require('bcrypt');

Registration=(req,res)=>{
    if(!req.body.FirstName || !req.body.lastName || !req.body.Password || !req.body.Email){
        res.json({
            status:400,
            succes:0,
            message:"Failed All filed Required"
        })
    }else{
        bcrypt.hash(req.body.Password,10)
        .then((hashedPassword)=>{
            const resitrationData={
                FirstName:req.body.FirstName,
                lastName:req.body.lastName,
                Password:hashedPassword,
                Email:req.body.Email
            } 
            knex("Users").isert
        })
    }
}

