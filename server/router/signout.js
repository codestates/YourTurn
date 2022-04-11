const express = require("express");
const signoutController = require("../controllers/user/signout");
const router = express.Router();

router.post("/", signoutController);

module.exports = router;
