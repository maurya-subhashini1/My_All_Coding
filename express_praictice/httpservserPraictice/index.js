const res = require("express/lib/response")
const http=require("http")


const server=http.createServer((req,res)=>{
    res.end("hello frome the other sides");
});
server.listen(8000,"127.0.0.1")
console.log("listeing to the port no 8000")