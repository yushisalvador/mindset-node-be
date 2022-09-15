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

module.exports = { getAllEntries, getUserEntries };
