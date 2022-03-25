var mysql=require("mysql")

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Navgurukul@123"
})
con.connect(function(err){
    if (err)throw err;
    console.log("connected")
    con.query("create database mydb",function(err,result){
        if(err)throw err;
        console.log("database created");
    });
});