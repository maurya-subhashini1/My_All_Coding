const knex=require('../database/db')
const jwt = require('jsonwebtoken');

get=(req,res)=>{
    knex.select("*").from("userlogin")
    .then((data)=>{
            res.send(data)
            console.log(data);
        
    }).catch((err)=>{
            console.log(err);
            res.send(err)   
    });
    }
post=(req,res)=>{
    // console.log(req.body);
    const user={ 
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        password:req.body.password,
        email:req.body.email
    }
    knex("userlogin").insert(user)
    
    .then((data)=>{
        res.send(data)
        console.log(data);

    }).catch((err)=>{
        console.log(err);
        res.send(err)

        
    });
}

// login=(req,res)=>{

// }

module.exports={get,post}
































// const knex=require("../database/db")
// // app.use(express.json())//this is middelwere

// //get means hame data chahiye esliye ham post ka use karte hai
// get=(req,res)=>{
//     knex.select("*").from("loginuser")
//     .then((data)=>{
//         res.send(data)
//         console.log(data);

//     }).catch((err)=>{
//         console.log(err);
//         res.send(err)

        
//     });
// }
// post=(req,res)=>{
//     const user={
//         id:students.length+1, 
//         first_name:req.body.first_name,
//         last_name:req.body.last_name,
//         password:req.body.password,
//         cpasswrod:req.body.cpasswrod
//     }
//     knex.insert("loginuser").from(user)
//     .then((data)=>{
//         res.send(data)
//         console.log(data);

//     }).catch((err)=>{
//         console.log(err);
//         res.send(err)

        
//     });
// }

// module.exports={get,post}