const express = require("express");
const articleController = require("../controllers/article");
const router = express.Router();

router.get("/:id", articleController.getArticle);

module.exports = router;
