const express = require("express");
const teamController = require("../controllers/team");
const router = express.Router();

router.get("/:id", teamController.getTeamMain);
router.get("/article/:id", teamController.getArticle);
router.post("/write-article", teamController.postArticle)

module.exports = router;
