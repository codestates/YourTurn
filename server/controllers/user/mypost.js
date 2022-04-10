const { post } = require("../models");

module.exports = {
  getUserPost: async (req, res) => {
    const user_id = req.userId;
    try {
      const userPost = await post.findAll({
        attributes: ["post_id", "title", "content", "total_likes"],
        where: { id: user_id },
      });
      console.log("userPost::", userPost);

      if (!userPost) {
        return res.status(404).json({ message: "failed" });
      }
      return res.status(200).json({ data: userPost });
    } catch (err) {
      return res.status(500).json({ message: "Server Error" });
    }
  },
};
