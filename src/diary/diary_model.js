const config = require("../../knexfile");
const knex = require("knex")(config);

function getAllEntries() {
  return knex.select("*").from("entries").catch(console.error);
}

module.exports = { getAllEntries };
