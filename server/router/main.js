const express = require("express");
const teamMainController = require("../controllers/team/main");
const router = express.Router();

router.get("/:id", teamMainController);

module.exports = router;
