const { user } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");

module.exports = async (req, res) => {
  const userInfo = await user.findOne({
    where: { email: req.body.email, password: req.body.password },
  });
  console.log(userInfo)

  if (!userInfo) {
    return res.status(404).send("Invalid user or Wrong password");
  } else {
    try {
      const accessToken = generateAccessToken(userInfo.dataValues);
      sendAccessToken(res, accessToken);
    } catch (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
};
