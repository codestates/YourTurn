const { post, comment } = require("../models");

module.exports = {
  getArticle: async (req, res) => {
    try {
      const postInfo = await post.findOne({
        attributes: ["title", "content", "total_likes", "user_id"],
        where: { id: req.params.id },
        include: [
          {
            model: comment,
          },
        ],
      });
      return res.status(200).json({ postInfo: postInfo });
    } catch (err) {
      res.status(500).send("Internal Server Error");
    }
  },
};
