const express=require("express");

// create express app
const app=express();


//setup the server port
const port=process.env.PORT||5000

//define root routes
app.get("/",(req,res)=>{
    res.send("hello wrold");
});

//import employee routes
const employeeRoutes=require('./src/routes/employee.route.js');

//create emloyee router
app.use('/api/v1/employee',employeeRoutes)

//listen to the port
app.listen(port,()=>{
    console.log(`Express Server is running at port ${port}`);
});