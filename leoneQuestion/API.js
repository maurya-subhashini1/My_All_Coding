const Btn=document.querySelector("#btn")
const Btn2=document.querySelector("#btn-2")
const ouput=document.querySelector("#Out-put")


const url="[https://mock-practice.prakhar10v.repl.co/bollywood?name=](https://mock-practice.prakhar10v.repl.co/bollywood?name="

YJHD =Btn.innerText
ZNMD=Btn2.innertText


Btn.addEventListener("click",()=>callApi(YJHD))
Btn2.addEventListener("click",()=>callApi(ZNMD))

function callApi(name){
    fetch(url + name)
        .then(res =>res.json())
        console.log("data")
    }


