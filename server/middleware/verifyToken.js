const { user } = require("../models");
const { isAuthorized } = require("../controllers/tokenFunctions");
require("dotenv").config();

const isAuth = async (req, res, next) => {
  const accessTokenData = isAuthorized(req);
  console.log("accessTokenData::", accessTokenData);
  // TODO: 로그인 여부를 판단하고, Access token payload를 이용하여 응답을 제공하세요.
  if (!accessTokenData) {
    return res.status(401).send({ data: null, message: "not authorized" });
  }

  try {
    const userInfo = await user.findOne({
      where: { email: accessTokenData.email },
      attributes: ["id"],
    });

    let data = userInfo.dataValues;
    delete data.password;

    return next();
  } catch (err) {
    return res.status(500).send("errrrrrr");
  }
};

module.exports = isAuth;
