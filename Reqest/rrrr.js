const axios=require('axios')
const readline=require("readline-sync")
const fs = require('fs')

const meraki_course=axios.get("https://api.merakilearn.org/courses")
    .then( Response=>{
        let data=(Response.data)
        let myfile=JSON.stringify(data,null,4)
        fs.writeFileSync("topic_data.json",myfile)


})
.catch((error)=>{
    console.log(error)
})