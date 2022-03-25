const mongoose=require("mongoose")
var Schema = mongoose.Schema;

var userSchema = new Schema({
    FirstName:{
        type:String
    },
    LastName:{
        type:String
    },
    Password:{
        type:String
    },
    Email:{
        type:String
    },
    Phone:{
        type:String
    }
})

const Regsitartion=new mongoose.model("Regsitartion",userSchema)
module.exports=Regsitartion