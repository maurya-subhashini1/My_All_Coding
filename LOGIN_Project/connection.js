
 var mysql = require('mysql');

 var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "Navgurukul@123",
   database: "mydb"
 });

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE USERes (id INT AUTO_INCREMENT PRIMARY KEY, uaername VARCHAR(255), address VARCHAR(255),phone_No integer)";
  // var sql="CREATE TABLE Usersadv(id int NOT NULL AUTO_INCREMENTn user_ame varchar(255)NOT NULL,hoibise varchar(255),phone_No integer,PRIMARY KEY(id))"

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
}); 