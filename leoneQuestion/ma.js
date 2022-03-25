let btnRed=document.querySelector("#btnred")
let btnblue=document.querySelector("#btnblue")
let btngreen=document.querySelector("#btngreen")
let content1=document.querySelector("input");
// var content=content1.value

btnRed.addEventListener("click",()=>content1.style.color="red")
btnblue.addEventListener("click",()=>content1.style.color="blue")
btngreen.addEventListener("click",()=>content1.style.color="green")  