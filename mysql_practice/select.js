var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Navgurukul@123",
  database: "mydatabase"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM students", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});