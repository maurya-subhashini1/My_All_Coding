const INPUT=document.querySelector("#input")
const Btn1=document.querySelector("#btn1")
const Btn2=document.querySelector("#btn2")
const Btn3 =document.querySelector("#btn3")
const showouput=document.querySelector("#output")

usertext=INPUT.value
Btn1.addEventListener("click",()=>{
    showouput.innerHTML=`<h1>${usertext}<h1>`
})
Btn2.addEventListener("click",()=>{
    showouput.innerHTML=`<h2>${usertext}<h2>`
})
Btn3.addEventListener("click",()=>{
    showouput.innerHTML=`<h3>${usertext}<h3>`
})