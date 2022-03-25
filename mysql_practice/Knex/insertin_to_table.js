// const options={
//     client:"mysql",
//     connection:{
//         host:"localhost",
//         user:"root",
//         password:"Navgurukul@123",
//         database:"mydb"
//     }
// }
// const knex=require("knex")(options);

// const cars = [
//     { name: 'Audi', price: 52642 },
//     { name: 'Mercedes', price: 57127 },
//     { name: 'Skoda', price: 9000 },
//     { name: 'Volvo', price: 29000 },
//     { name: 'Bentley', price: 350000 },
//     { name: 'Citroen', price: 21000 },
//     { name: 'Hummer', price: 41400 },
//     { name: 'Volkswagen', price: 21600 },
// ]

// knex('cars').insert(cars)
// .then(() => 
// console.log("data inserted"))
// .catch((err) => 
// { console.log(err); throw err })
//  .finally(() => {
//     knex.destroy();
// });


//  USE OF SELECT


// const options = {
//     client: 'mysql',
//     connection: {
//         host: '127.0.0.1',
//         user: 'root',
//         password: 'Navgurukul@123',
//         database: 'mydb'
//     }
// }

// const knex = require('knex')(options);

// knex.from('cars').select("*")
    // .then((rows) => {
    //     for (row of rows) {
    //         console.log(`${row['id']} ${row['name']} ${row['price']}`);
    //     }
    // }).catch((err) => { console.log( err); throw err })
    // .finally(() => {
    //     knex.destroy();
    // });




    // SELECT_WEHER

    const options = {
        client: 'mysql',
        connection: {
            host:"localhost",
            user:"root",
            password:"Navgurukul@123",
            database:"mydb"
        }
    }
    
    const knex = require('knex')(options);
    
    knex.from('cars').select("name", "price").where('price', '>', '50000')
        .then((rows) => {
            for (row of rows) {
                console.log(`${row['name']} ${row['price']}`);
            }
        })
        .catch((err) => { console.log( err); throw err })
        .finally(() => {
            knex.destroy();
        });