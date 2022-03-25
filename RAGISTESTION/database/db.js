const knex = require("knex")({
    client: "mysql",
    connection: {
      host: "localhost",
      user: "root",
      password: "Navgurukul@123",
      database: "subhash",
    },
  });
  
  // Create table
  knex.schema.createTable("userlogin",(table)=>{
    table.increments("id").primary();
    table.string("first_name");
    table.string("last_name");
    table.string("password");
    table.string("email");
  })
  .then(()=>{
    console.log("created");

  }).catch(()=>{
    console.log("already created");
  })
    

module.exports=knex;