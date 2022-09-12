const express = require("express");
const natural = require("natural");

const router = express.Router();

router.get("/entries", function (req, res, next) {
  res.send("hihihiodfbh");
});

router.post("/entries", function (req, res, next) {
  const { entry, date } = req.body;
});

module.exports = router;
