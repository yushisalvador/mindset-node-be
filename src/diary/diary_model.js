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

function addNewEntry(post) {
  return knex.insert(post).into("entries").catch(console.error);
}

function deleteEntry(id) {
  return knex("entries")
    .select("*")
    .where("entries.id", id)
    .del()
    .catch(console.error);
}

module.exports = { getAllEntries, getUserEntries, addNewEntry, deleteEntry };
