const { post, comment } = require("../models");
const { isAuthorized } = require("./tokenFunctions");

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
  createComment: async (req, res) => {
    // user_id랑 nickname 찾아야함
    const userInfo = isAuthorized(req);
    console.log("userInfo:", userInfo);
    console.log("req.body:", req.body);
    console.log("req.params:", req.params);

    try {
      const commentInfo = await comment.create({
        post_id: req.params.id,
        content: req.body.content,
        user_id: userInfo.id,
        user_nickname: userInfo.nickname,
      });
      return res.status(201).json({ commentInfo: commentInfo });
    } catch (err) {
      res.status(500).send("Internal Server Error");
    }
  },
};
