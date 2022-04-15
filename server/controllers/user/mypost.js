const { post } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  // const userId = req.params.id;
  const userAuthInfo = isAuthorized(req);
  console.log("userAuthInfo::", userAuthInfo);
  try {
    const userPost = await post.findAll({
      attributes: [
        "user_id",
        "total_likes",
        "id",
        "title",
        "content",
        "team_id",
        "createdAt",
        "updatedAt",
      ],
      where: { user_id: userAuthInfo.id },
    });
    console.log("userPost::", userPost);

    if (!userPost) {
      return res.status(404).json({ message: "failed" });
    }
    return res.status(200).json({ data: userPost });
  } catch (err) {
    return res.status(500).json({ message: "Server Error / mypost" });
  }
};
