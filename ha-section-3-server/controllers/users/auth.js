const { user } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = (req, res) => {
  const accessTokenData = isAuthorized(req);
  // TODO: 로그인 여부를 판단하고, Access token payload를 이용하여 응답을 제공하세요.
  if (!accessTokenData) {
    return res.status(401).json({ data: null, message: "not authorized" });
  }
  // console.log("accessTokenData:::", accessTokenData); // ---> { id, email, username, mobile, createdAt, updatedAt, iat, exp }
  const { id } = accessTokenData;
  user
    .findOne({ where: { id } })
    .then((data) => {
      if (!data) {
        return res.status(401).send({ data: null, message: "not authorized" });
      }
      delete data.dataValues.password;
      return res.json({ data: { userInfo: data.dataValues } });
    })
    .catch((err) => {
      console.log(err);
    });
};
