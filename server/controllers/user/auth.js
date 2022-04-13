const { user } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = (req, res) => {
  const accessTokenData = isAuthorized(req);
  // 로그인 여부 확인 후 AccesstokenData 응답에 추가하기
  console.log("accessTokenData-----------", accessTokenData);
  if (!accessTokenData) {
    res.status(401).send({ data: null, message: "not authorized" });
  } else {
    res.status(200).send({
      data: accessTokenData,
      message: "auth success",
    });
  }
};
