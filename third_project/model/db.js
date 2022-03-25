const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "Navgurukul@123",
    database: "blog"
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

}).catch(() => {
  console.log("already created");
})

knex.schema.hasTable("Posts").then(function (exists) {
  if (!exists) {
    console.log({ Success: `users table created successfully.` });
    return knex.schema.createTable("Posts", function (t) {
      t.increments("id").primary();
      t.integer("Post_id");
      t.string("Tittle");
      t.string("description")
    });
  } else {
    // console.log({ Sorry: `users table already exist!` });
  }
});
module.exports = knex