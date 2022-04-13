const express = require("express");
const isAuth = require("../middleware/token");
const profileController = require("../controllers/user/profile");
const router = express.Router();

router.get("/", isAuth, profileController.getUser);
router.patch("/", profileController.updateNickname);

module.exports = router;
