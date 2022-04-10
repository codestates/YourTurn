const { user } = require("../../models");

module.exports = {
  getUser: async (req, res) => {
    // 사용자의 my profile 조회
    const userInfo = await user.findOne({
      attributes: ["email", "nickname"],
      where: { email: req.body.email },
    });
    try {
      if (userInfo) {
        return res.status(200).json({ data: userInfo });
      }
      return res.status(401).json({ message: "Unauthorized request" });
    } catch (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
  updateNickname: async (req, res) => {
    console.log("req.params::", req.params);
    // params로 받은 nickname으로 닉네임을 업데이트
    const userNickname = await user.update(
      { nickname: req.params.nickname },
      { where: { id: req.body.email } }
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
