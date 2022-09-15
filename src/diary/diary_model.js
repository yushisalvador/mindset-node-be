const config = require("../../knexfile");
const knex = require("knex")(config);

function getAllEntries() {
  return knex.select("*").from("entries").catch(console.error);
}

function getUserEntries(username) {
  return knex
    .select("*")
    .from("entries")
    .where("username", username)
    .catch(console.error);
}

module.exports = { getAllEntries, getUserEntries };
