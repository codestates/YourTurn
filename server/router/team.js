const express = require("express");
const teamController = require("../controllers/team");
const isAuth = require("../middleware/verifyToken");
const router = express.Router();

// router.get("/filtered/:id", partyController.getFilteredParties); // 날짜별 파티 조회
// router.get("/:id", partyController.getParty); // 파티 상세 정보 조회

router.get("/:id", isAuth, teamController.getTeamMain);
router.get("/article/:id", isAuth, teamController.getArticle);
router.post("/write-article", isAuth, teamController.getArticle);

module.exports = router;
