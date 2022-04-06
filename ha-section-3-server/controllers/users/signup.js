const { user } = require("../../models");
const { generateAccessToken } = require("../tokenFunctions");

module.exports = async (req, res) => {
  // TODO: 회원가입 및 사용자 생성 로직을 작성하세요.
  // console.log("req.body:::", req.body); // ---> { username, email, password, mobile }
  const { username, email, password, mobile } = req.body;
  if (!username || !email || !password || !mobile) {
    return res.status(422).send("insufficient parameters supplied");
  }

  await user
    .findOrCreate({
      where: { username, email, password, mobile },
      defaults: { username, email, password, mobile },
    })
    // [ result, created ] = [ {찾았거나 생성한 객체}, 찾았으면 true/생성했으면 false ]
    .then(([result, created]) => {
      if (!created) {
        // Found
        return res.status(409).send("email exists");
      } else {
        // Created
        const accessToken = generateAccessToken(result.dataValues);
        // console.log("result.dataValues:::", result.dataValues);
        return res
          .status(201)
          .cookie("jwt", accessToken, {
            Domain: "localhost",
            Path: "/",
            SameSite: "None",
            httpOnly: true,
            secure: true,
          })
          .json({ message: "ok" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
};
