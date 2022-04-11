const express = require("express");
const teamController = require("../controllers/team");
const router = express.Router();

// router.get("/filtered/:id", partyController.getFilteredParties); // 날짜별 파티 조회
// router.get("/:id", partyController.getParty); // 파티 상세 정보 조회

router.get("/article/:id", teamController.getArticle);
router.get("/:id", teamController.getTeamMain);



module.exports = router;