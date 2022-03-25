const INPUT=document.querySelector("input")
const btn=document.querySelector("#Btn")
const showouput=document.querySelector("#output")

btn.disabled=true
var user1=INPUT.value
btn.addEventListener("click",()=>{
   
    if(user1.length <= 10){
        btn.disabled=true
       
        showouput.innerText="error"
        document.get
    }else{
        btn.disabled=false
        showouput.innerText="succese"
    }
})

INPUT.addEventListener("input",()=>{
    var user1=INPUT.value

    if(user1.length <= 10){
        btn.disabled=true
    }else{
        
        btn.disabled=false
        
    }
})