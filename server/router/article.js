const express = require("express");
const articleController = require("../controllers/article");
const router = express.Router();

router.get("/:id", articleController.getArticle);
router.post("/:id", articleController.createComment);

module.exports = router;
