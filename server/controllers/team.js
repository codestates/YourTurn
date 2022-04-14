const { team, post, comment } = require("../models");
const { isAuthorized } = require("./tokenFunctions");

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

  postArticle: async (req, res) => {

    console.log("확인필요",req.body);

    console.log("위쪽");
    const userInfo = isAuthorized(req);
    console.log("유저인포!",userInfo)

    try {
      console.log("어디야")
      if (!userInfo) {
        console.log("요놈")
        return res.status(404).send("error");
      } else {
        const postArticle = await post.create({
          title: req.body.title,
          content: req.body.content,
          user_id: userInfo.id,
          team_id: req.body.team_id, // 프론트에서 임의로 추가해놓음
        });
        return res.status(200).json({ postArticle });
      }
    } catch (err) {
      return res.status(500).send("Internal Server Error");
    }
  },
};
