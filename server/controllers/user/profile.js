const { user } = require("../../models");

module.exports = {
  getUser: async (req, res) => {
    // 사용자의 my profile 조회
    const userId = req.params.id;
    const userInfo = await user.findOne({
      attributes: ["id", "email", "nickname"],
      where: { id: userId },
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
    // params로 받은 nickname으로 닉네임을 업데이트
    const userId = req.params.id;
    const userNickname = await user.update(
      { nickname: req.body.nickname },
      { where: { id: userId } }
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
