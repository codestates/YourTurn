const express = require("express");
const signinController = require("../controllers/user/signin");
const router = express.Router();

router.post("/", signinController);

module.exports = router;
