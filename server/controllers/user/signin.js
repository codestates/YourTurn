const { user } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");

module.exports = async (req, res) => {
  // 로그인 정보를 받아 사용자 인증 후 토큰 전달
  // console.log('req.body----------', req.body);
  const userInfo = await user.findOne({
    where: { email: req.body.email, password: req.body.password },
  });
  if (!userInfo) {
    res.status(404).send("Invalid user or Wrong password");
  }
  try {
    const { email, password } = userInfo;
    const payload = { email, password };
    const accessToken = generateAccessToken(payload);
    sendAccessToken(res, accessToken);
    return res.status(200).send({ message: "ok" });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
