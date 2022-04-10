const { user } = require("../../models");
const { generateAccessToken } = require("../tokenFunctions");

module.exports = async (req, res) => {
  // 회원가입 및 유저 생성하는 로직
  const { email, password, nickname } = req.body;

  if (!email || !password || !nickname) {
    return res.status(422).send("Wrong request");
  }

  const [data, created] = await user.findOrCreate({
    where: {
      email: email,
      password: password,
      nickname: nickname,
    },
  });

  if (!created) {
    return res.status(409).send("Email Exists");
  }

  try {
    const accessToken = generateAccessToken(data.dataValues);
    return res.status(201).cookie("jwt", accessToken).json({ message: "ok" });
  } catch (err) {
    console.log(err);
  }
};
