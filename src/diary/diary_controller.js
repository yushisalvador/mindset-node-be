const diaryModel = require("./diary_model");

async function getAllEntries(req, res) {
  const allEntries = await diaryModel.getAllEntries();
  res.status(200).send(allEntries);
  return;
}

module.exports = { getAllEntries };
