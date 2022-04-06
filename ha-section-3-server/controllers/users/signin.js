const { user } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");

module.exports = (req, res) => {
  // TODO: 로그인 정보를 통해 사용자 인증 후 토큰 전달
  const { email, password } = req.body;
  user
    .findOne({
      where: {
        email,
        password,
      },
    })
    .then((data) => {
      if (!data) {
        // return res.status(401).send({ data: null, message: 'not authorized' });
        return res.status(404).send("invalid user");
      }
      // console.log("data.dataValues::: ", data.dataValues); // ---> { id, email, password, mobile, createdAt, updatedAt }
      delete data.dataValues.password;
      const accessToken = generateAccessToken(data.dataValues);

      sendAccessToken(res, accessToken);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
};
