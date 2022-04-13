const { user } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = {
  getUser: async (req, res) => {
    // 사용자의 my profile 조회
    // const userAuthInfo = isAuthorized(req);
    // console.log("userAuthInfo:", userAuthInfo);
    console.log("getUser 진입");
    console.log("req.userId controller:", req.userId);
    console.log("req.headers controller:", req.headers);
    const userInfo = await user.findOne({
      attributes: ["id", "email", "nickname"],
      where: { id: req.userId },
    });
    try {
      if (userInfo) {
        return res.status(200).json({ data: userInfo });
      }
      return res.status(401).json({ message: "Unauthorized request getUser" });
    } catch (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
  updateNickname: async (req, res) => {
    // params로 받은 nickname으로 닉네임을 업데이트
    const userAuthInfo = isAuthorized(req);
    const userNickname = await user.update(
      { nickname: req.body.nickname },
      { where: { email: userAuthInfo.email } }
    );
    try {
      if (userNickname) {
        return res.status(200).json({ message: "Success to change user nickname" });
      }
      return res.status(401).json({ message: "Unauthorized request" });
    } catch (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
