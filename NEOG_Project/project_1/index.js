console.log("**** start the Game ****")

var readlinesync=require("readline-sync");
var userName=readlinesync.question("what's your name:-");
console.log("Welcome" +"  "+ userName +" "+"to do you know subhashini")
var scour=0;

function play(Question,Answere){
    var userName=readlinesync.question(Question);
    if(userName.toUpperCase==Answere.toUpperCase){
        scour=scour+1
        console.log("Right")
       
    }else{
        console.log("wrog")
    }
    console.log("current scour=",scour)
        console.log("------------------------------")
}
const Question=[{
    Question:"where do I lived ?:-",
    Answere:"pune" || "uttar perdesh"
},{
    Question:"where do I study ?:-",
    Answere:"pune"
},{
    Question:"who is my favorite supperhero would be ?:-",
    Answere:"Salman Khan"
},{
    Question:"what is my favorite colour ?:-",
    Answere:"red"
}]

for(var i=0;i<Question.length;i++){
    var currentquestion=Question[i];
    play(currentquestion.Question,
        currentquestion.Answere)
}
console.log("YAY! your scored",scour)

console.log("sucessfuly")