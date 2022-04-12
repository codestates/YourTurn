const express = require("express");
const teamController = require("../controllers/team");
const router = express.Router();

router.get("/:id", teamController.getTeamMain);
router.post("/write", teamController.postArticle);

module.exports = router;
