// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//    res.send("Hello world!");
// });

// app.listen(3000);



var express = require('express');
var app = express();

app.get('/',(req, res) =>{
   res.send("welcome! to home page");
});

app.get('/about',(req, res) =>{
   res.send("welcome! to about page");
});



app.listen(3000,"127.00.1",()=>{
   console.log("KJHFEWIFIOUQWLOIG   fw gHSJV")
});