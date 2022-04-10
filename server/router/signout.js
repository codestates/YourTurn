const express = require("express");
const signoutController = require("../controllers/user/signout");
const router = express.Router();

router.get("/", signoutController);

module.exports = router;
