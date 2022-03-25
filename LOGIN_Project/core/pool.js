const util=require("util");
const mysql=require("mysql");

const pool=mysql.createConnection({
    connectionLimit:10,
    host:"localhost",
    user:"root",
    password:"Navgurukul@123",
    database:"mydatabase"
})

pool.getConnection((err,connection)=>{
    if(err)
        console.error("something want wrong connecting to the databases..")
    if(connection)
        connection.release();
    return;
});
pool.query=util.promisify(pool.query);

module.exports=pool;