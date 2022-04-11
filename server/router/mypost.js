const express = require("express");
const mypostController = require("../controllers/user/mypost");
const router = express.Router();

router.get("/:id", mypostController);

module.exports = router;
