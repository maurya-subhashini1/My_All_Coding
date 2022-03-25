// const express=require("express")

// const app=express()

// const http=require('http').createServer(app)

// const PORT=process.env.PORT || 3000


// http.listen(PORT,()=>{
//     console.log(`listening on port ${PORT}`)
// })


// app.get('/',(req,res)=>{
//     res.sendFile(__dirname + "/index.html")
// })

function greet(name,callback){
    console.log('hello '+name);
    callback()
}

function callme(){
    console.log('I am callback function');

}

greet('navgurukul',callme)