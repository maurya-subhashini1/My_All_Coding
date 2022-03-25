
const knex = require("../model/db")
const cookie = require("cookie-parser")
const jwt = require("jsonwebtoken")
// const bcrypt = require("bcrypt")


Ragistation=(req,res)=>{
    // console.log(req.body);
    if (!req.body.FirstName || !req.body.lastName || !req.body.Password || !req.body.Email) {
        res.status(500)
        return res.json({
            message: "failed all required"
        })
    }else{
    const user={ 
        FirstName:req.body.FirstName,
        lastName :req.body.lastName,
        Password:req.body.Password,
        Email:req.body.Email
    }
    knex("Users").insert(user)
    
    .then((data)=>{
        knex.select('*').from('Users').where('id',data)
        .then((post)=>{
    
            res.send({ message:"User Registered succesfully",data:post})
            console.log(data);


        }).catch((err)=>{
            res.send({
                message:'Email already exits'
            })
        })
        
    }).catch((err)=>{
        console.log(err);
        res.send({error: 'this data already inserted',error:err})

        
    });
}
}

get_Registretion_data=(req,res)=>{
    knex.select("*").from("Users")
    .then((data)=>{
            res.send({message:"Get data successfully",data:data})
            console.log(data);
        
    }).catch((err)=>{
            console.log(err);
            res.send({error:"Not Get data"})   
    });
    }
Login=(req,res)=>{
   knex.select('*').from('Users').where('Password','=',req.body.Password,'Email','=',req.body.Email)
   .then((data)=>{
       console.log(data)
       res.send('login')



    }).catch((err)=>{
            console.log(err);
            res.send({message:"Infromition some w"})   
    });
}
logOut=(req,res)=>{
    res.clearCookie('token')
    res.send({message:"logout successfully"})
}
    
module.exports={Ragistation,get_Registretion_data,Login,logOut}




























