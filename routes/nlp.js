const express = require("express");
const natural = require("natural");

const router = express.Router();

router.get("/entries", function (req, res) {
  res.send("this is the entries page");
});

router.post("/entries", function (req, res) {
  const { entry, date } = req.body;
});

module.exports = router;
