const { team, post, comment } = require("../../server/models");

module.exports = {
  getTeamMain: async (req, res) => {
    // 팀 테이블 모든 정보 findAll -> payload
    // post 테이블 팀 id랑 같은걸 찾아서
    const teamId = req.params.id;
    const teamAndPostInfo = await team.findAll({
      include: [
        {
          model: post,
          attributes: ["id", "title", "content", "total_likes", "user_id", "createdAt"],
          where: {
            id: teamId,
          },
        },
      ],
      attributes: ["id", "team_name", "team_description", "createdAt"],
      where: {
        id: teamId,
      },
    });
    console.log("teamAndPostInfo::", teamAndPostInfo);
    try {
      if (teamAndPostInfo) {
        res.status(200).json({ teamData: teamAndPostInfo });
      } else {
        res.status(404).send("No team found");
      }
    } catch (err) {
      res.status(500).send("Internal Server Error");
    }
  },

  getArticle: async (req, res) => {
    try{    
      const postInfo = await post.findOne({ 
        attributes: ["title", "content", "total_likes", "user_id"],
        where: { id: req.params.id },
        include: [{
          model: comment
        }]
      })
      return res.status(200).json({ postInfo: postInfo })
    } catch(err){
      res.status(500).send("Internal Server Error");
    }
  }
};