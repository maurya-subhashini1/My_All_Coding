const Regsitartion= require("../model/User")

const bcrypt=require("bcrypt")

const jwt= require("jsonwebtoken")

const register=(req,res)=>{
    bcrypt.hash(req.body.Password, 10, function(err,hashedPass){
        if(err){
            res.json({
                error:err
            })
        }
        let user=new Regsitartion ({
            FirstName:req.body.FirstName,
            LastName:req.body.FirstName,
            Password:hashedPass,
            Email:req.body.Email,
            Phone:req.body.Phone
        })
        user.save()
        // .then(user =>{
        //     res.json({
        //         message:"user Regsittared successfuly..",
        //         user:user
        //     })
        // }).catch(error =>{
        //     res.json({
        //         message:"An error occured!",
        //         error:error
        //     })
        //     console.log(error);
        // })
    })
    
}

module.exports={register}

