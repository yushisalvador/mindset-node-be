const express = require("express");

const router = express.Router();
const diaryController = require("../diary/diary_controller");

// @desc Fetch all entries
// @access Public for now
// @route GET /api/entries

router.get("/entries", diaryController.getAllEntries);

// @desc add new entry
// @access Public for now
// @route POST /api/entries

router.post("/entries", diaryController.addNewEntry);

// @desc delete single entry
// @access Public for now
// @route DELETE /api/entries/:id

router.delete("/entries", diaryController.addNewEntry);
// @desc Fetch user entries
// @access Public for now
// @route GET /api/myentries?username=

router.get("/myentries", diaryController.getUserEntries);

module.exports = router;
