const diaryModel = require("./diary_model");

async function getAllEntries(req, res) {
  const allEntries = await diaryModel.getAllEntries();
  res.status(200).send(allEntries);
  return;
}

async function getUserEntries(req, res) {
  const username = req.query.username;
  const userEntries = await diaryModel.getUserEntries(username);
  res.status(200).send(userEntries);
  return;
}

async function addNewEntry(req, res) {
  const newPost = {
    username: req.body.username,
    written_on: req.body.written_on,
    entry: req.body.entry,
  };
  await diaryModel.addNewEntry(newPost);
  res.status(200).send("successfully added!");
  return;
}

async function deleteEntry(req, res) {
  const id = req.params.id;
  await diaryModel.deleteEntry(id);
  res.status(200).send("deleted!");
  return;
}
module.exports = { getAllEntries, getUserEntries, addNewEntry, deleteEntry };
