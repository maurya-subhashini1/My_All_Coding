const express=require("express")
const router=require("./routes/route")

const app=express()
app.use(express.json())

app.use("/",router)

app.listen(6000,()=>{
    console.log("port listing 6000")
})