const knex=require("knex")({
    client:"mysql",
    connection:{
        host:"127.0.0.1",
        user:"root",
        password:"Navgurukul@123",
        database:"myapp"

    },
})

// create table

function  create_table(){
    knex.schema.hasTable("login").then(function(exists){
        if(!exists){
            console.log({success:`user table created successfuly`})
            return knex.schema.createTable("login",function(table){
                table.increments("id").primary();
                table.string("first_name",100);
                table.string("last_name",100);
                table.string("Gender",100);
                table.string("dob",100);
                table.string("description");
                table.string("password",100)
                table.string("confrom password",100);
            })
        }else{
            console.log({sorry:`users table already exist!`})
        }
        if (exists) {
            console.log({ Success: `data inserted into users table.` });
            const user=require('readline-sync')
            const first_name=user.question('Enter the name')
            const last_name=user.question('Enter the lastname')
            const Gender=user.question('Enter the Gender')
            const dob=user.question('Enter the DOB')
            const description=user.question('Enter the description')
            const password=user.question("Enter the password")
            const confimPassword=user.question("Enter th confrom password")

            var d={first_name:"first_name",
                last_name:"lastname",
                Gender:"Gender",
                dob:"dob",
                description:"description",
                password:"password",
                confimPassword:"confimPassword"
                }
                Array.push(d)
                

create_table()