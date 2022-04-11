const express = require("express");
const teamController = require("../controllers/team");
const router = express.Router();

// router.get("/filtered/:id", partyController.getFilteredParties); // 날짜별 파티 조회
// router.get("/:id", partyController.getParty); // 파티 상세 정보 조회

<<<<<<< HEAD
router.get("/article/:id", teamController.getArticle);
router.get("/:id", teamController.getTeamMain);



module.exports = router;
=======
router.get("/:id", teamController.getTeamMain);
router.get("/article/:id", teamController.getArticle);

module.exports = router;
>>>>>>> ad98617579016bba0eb08bfe6905fce0a798c04c
