const express = require("express");
const authController = require("../controllers/user/auth");
const router = express.Router();

router.get("/", authController);

module.exports = router;
