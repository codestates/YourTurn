const express = require("express");
const profileController = require("../controllers/user/profile");
const router = express.Router();

router.get("/", profileController.getUser);
router.patch("/", profileController.updateNickname);

module.exports = router;
