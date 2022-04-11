const express = require("express");
const profileController = require("../controllers/user/profile");
const router = express.Router();

router.get("/:id", profileController.getUser);
router.patch("/:id", profileController.updateNickname);

module.exports = router;
