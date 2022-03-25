// const router=require("./routes/route")

const express=require("express")
const router =require("./routes/route")
const app=express()
app.use(express.json())

app.use("/",router)


app.listen(4500,()=>{
    console.log("port listing 4500")
})
