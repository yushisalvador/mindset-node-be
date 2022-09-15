const express = require("express");

const router = express.Router();
const diaryController = require("../diary/diary_controller");

// @desc Fetch all entries
// @access Public for now
// @route GET /api/entries

router.get("/entries", diaryController.getAllEntries);

// @desc Fetch user entries
// @access Public for now
// @route GET /api/myentries?username=

router.get("/myentries", diaryController.getUserEntries);

module.exports = router;
