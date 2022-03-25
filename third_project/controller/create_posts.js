const knex=require("../model/db")


create_Posts=(req,res)=>{
    const user={
        Post_id:req.body.Post_id,
        Tittle:req.body.Tittle,
        description:req.body.description
    }
    knex("Posts").insert(user)
    .then((data)=>{
        knex.select("*").from('Posts').where("id",data)
        .then((postData)=>{
            res.json({
                message:'Create New Post',
                Post:postData
            })
        }).catch((err)=>{
            res.json({message:'falield post',error:err})
        })
    }).catch((err)=>{
        res.send({Error:"something is wrong in post",error:err})
    })
}

module.exports={create_Posts}