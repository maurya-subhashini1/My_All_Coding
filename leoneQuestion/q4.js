// Create an Input Element, which shows a display message according to the Input text with the click of a button. If you type - 
// "Tanvi" - then show, "She is the best CEO ever!"
// "Tanay" - then show, "He is our FUNNY mentor!"
// "Swapnil" - then show, "He helps us CONQUER jobs!"
// "Akanksha" - then show, "She is our CHEERFUL Interviewer!"


const name1=document.querySelector("#Input")
const Btn=document.querySelector("#clickBtn")
const showResult=document.querySelector("#Output")




var name=name1.innerText.value
function clickHandler(name){
    if(name==="Tanvi"){
        showResult.innerText("She is the best CEO ever!")
    }else if(name==="Tanay"){
        showResult.innerText("He is our FUNNY mentor!")
    }else if(name==="Swapnil"){
        showResult.innerText("He helps us CONQUER jobs!")
    }else{
        showResult.innerText("invailes")
    }
}
Btn.addEventListener("click",clickHandler)