const mysql =require('mysql')
const con=mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"Navgurukul@123",
    database:"mydatabase"
})
con.connect(function(err){
    // if (err)throw error
    // console.log("connected")
    // var sql="CREATE TABLE Login (name VARCHAR(255), address VARCHAR(255),passwrod VARCHAR(255), DOB VARCHAR(255),Emailid VARCHAR(255))"
    // con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("Table created");
    //   });
    // });
    if (err) throw err;
    console.log("Connected!");
    const user=require('readline-sync')
    const name=user.question('Enter the name')
    const address=user.question('Enter the address')
    const passwrod=user.question('Enter the password')
    const DOB=user.question('Enter the DOB')
    const Emailid=user.question('Enter the email')


    var sql = "INSERT INTO Login (name, address,passwrod,DOB,Emailid) VALUES ?";
    var value=[[name,address,passwrod,DOB,Emailid]]
    con.query(sql,[value] ,function (err, result) {
        if (err) throw err;
        console.log("data inserted");
    });
})
module.exports=con

