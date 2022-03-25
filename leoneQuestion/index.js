const Input_1=document.querySelector("#input_1")
const InPut_2=document.querySelector("#input_2")
const Btn1=document.querySelector("#sburection")
const Btn2=document.querySelector("#decrection")
const Btn3=document.querySelector("#multiplection")
const Btn4=document.querySelector("#divisivel")
const showouput = document.querySelector("#output-show")

user=Input_1.value
usertext=InPut_2.value
Btn1.addEventListener("click",()=>{
    resulte=user+usertext
    showouput.innerText=resulte
})
Btn2.addEventListener("click",()=>{
    resulte=user-usertext
    showouput.innerText=resulte
    
})
Btn3.addEventListener("click",()=>{
    resulte=user*usertext
    showouput.innerText=resulte
})
Btn4.addEventListener("click",()=>{
    resulte=user%usertext
    showouput.innerText=resulte
})














// const intialPrice = document.querySelector("#intial-price")
// const quantityStocks = document.querySelector("#quantity-price")
// const currentPrice = document.querySelector("#current-price")
// const button = document.querySelector("#tell-button")
// const showResult = document.querySelector("#output-show")


// button.addEventListener("click", clickHandler)

// function clickHandler() {
//     var intialValue = Number(intialPrice.value)
//     var currentVlaue = Number(currentPrice.value)
//     var quantityValue = Number(quantityStocks.value)
//     calculatingLossAndProfit(intialValue, currentVlaue, quantityValue)
// }


// function calculatingLossAndProfit(inital, quantity, current) {
//     // console.log("clicked")
//     if (inital > current) { //lose
//         var lose = (inital - current) * quantity
//         var losePercentage = (lose / inital) * 100
//         showOutput(`Hey the loss is ${lose} and the percent is ${losePercentage}%`)


//     } else if (current > inital) { //profit
//         var profit = (current - inital) * quantity
//         var profitPercentange = (profit / inital) * 100
//         showOutput(`Hey the Profit is ${profit} and the percent is ${profitPercentange}%`)


//     }else {
//         showOutput('No pain no gain and no gain no pain')

//     }

// }


// function showOutput(message){
//     showResult.innerHTML=message
// }