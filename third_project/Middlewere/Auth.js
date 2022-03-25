var jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>{
    try{
        var token=req.body.user
        console.log(token)

        var decode=jwt.verify(token,"subhashini");
        req.userdata=decode;
        next();
    }catch(error){
        res.status(401).json({
            error:"Invalid token",
            error:error
        });
    }
}