const mysql=require('mysql');

//create here mysql connection

const dbConn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Navgurukul@123",
    database:"curd"
});

dbConn.connect(function(error){
    if(error) throw error
    console.log("database connected successfily")
});
module.exports=dbConn;