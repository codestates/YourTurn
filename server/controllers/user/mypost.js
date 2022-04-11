const { post } = require("../../models");

module.exports = async (req, res) => {
  const userId = req.params.id;
  console.log("userId::", userId);
  try {
    const userPost = await post.findAll({
      attributes: ["id", "title", "content", "total_likes"],
      where: { user_id: userId },
    });
    console.log("userPost::", userPost);

    if (!userPost) {
      return res.status(404).json({ message: "failed" });
    }
    return res.status(200).json({ data: userPost });
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
};
