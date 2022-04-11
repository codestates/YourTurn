const express = require("express");
const signupController = require("../controllers/user/signup");
const router = express.Router();

router.post("/", signupController);

module.exports = router;
