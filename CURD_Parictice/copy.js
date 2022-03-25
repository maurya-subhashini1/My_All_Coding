console.log("Welcome to Login & Sing Up page ")
const { info } = require("console")
const fs = require("fs")
const k=require("readline-sync")
const user=k.question("Enter the number :- (1)sing up / (2) login : ")
if (user==1){
    const userName=k.question("create your username: ")
    console.log("1.Password should be Capital letter\n2.Password should be Number\n3.Password must be special character  ")
    const passWord=k.question("create the your password: ")
    file=fs.readFileSync("my_file.json","utf8")
    if (file.includes(userName && passWord)){
        console.log("Your account is already exit! ")

        
    }else{
        console.log("It's your new account-")
        const emailAddress=k.question("Create your email:-")
        const email_reg=RegExp(/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/);
        const strongPassword_Reg=new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])");
        if (passWord.match(strongPassword_Reg)|| emailAddress.match(email_reg)){
            const confimPassword=k.question("Conferm your password: ")
           if (confimPassword===passWord){
                console.log(userName,"sigh up successfuly")
                console.log()
                console.log("We need more information:")
                fullName=k.question("Enter your full name: ")
                DOB=k.question("Enter your Date of Birth: ")
                phone=k.question("Enter your mobile number: ")
                console.log("Thank for infromation",fullName," :- ")
                
                const dict={
                    user:{
                        Username:userName,Password:confimPassword},
                        Profile:{Fullname:fullName,DOB:DOB,Mobile:phone}
                }
                    file=JSON.stringify(dict,null,6)
                    fs.appendFileSync("my_file.json",file)
                    console.log(dict)

            }else{
               console.log("Your password is incorrect!")
            }  
        
        }else{
            console.log("Please chack your email or password!")}
        }
}

else if (user==2){ 
        let file=fs.readFileSync("my_file.json","utf8")
        const info=JSON.parse(file)
        logUsername=k.question("Please Enter your username: ")
        logPassword=k.question("Enter the your password: ")
        if (file.includes(logUsername && logPassword)){
            console.log("Login succussfuly")
            console.log("Infromation:-")
            console.log("user:-",info['user'])
            console.log("profile:-",info['Profile'])

        }else{
            console.log("email or password wrong")
        }
    }else{
        console.log("Incorrct number")
    }
