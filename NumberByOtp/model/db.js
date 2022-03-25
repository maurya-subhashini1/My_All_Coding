
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "Navgurukul@123",
    database: "my_database"
  }
})
knex.schema.createTable("Users", (table) => {
  table.increments("id").primary();
  table.string("FirstName")
  table.string("lastName")
  table.string("Password")
  table.string("Email").notNullable().unique();

}).then(() => {
  console.log("created");

}).catch((err) => {
  console.log(err);
})
module.exports=knex