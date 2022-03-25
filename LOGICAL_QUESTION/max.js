// let c=require("readline-sync");
// let loop_time=c.question("enter loop time: ");
 
// var maxi=0;
// let lis=[ ]
// for (let i=1;i<=loop_time;i++) {
//    let num=c.question("enter number: ")
//    lis.push(num)
// }

// console.log(maxi)

const a=[50,40,23,70,56,12,52,10,7]
b=a[0]
for(i=0;i<a.length;i++){
    if(a[i]>b){
        b=(a)[i]  
    }
    
}
console.log(b)
a.splice(b)
console.log(a)



