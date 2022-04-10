const { team } = require("../../models");
const { post } = require("../../models");

module.exports = async (req, res) => {
  // 팀 테이블 모든 정보 findAll -> payload
  // post 테이블 팀 id랑 같은걸 찾아서
  const teamId = req.params.id;
  const teamInfo = await team.findOne({
    attributes: ["id", "team_name", "team_description", "createdAt"],
    where: {
      id: teamId,
    },
  });
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
  //   Figure.findAll({
  //     include: [
  //        {
  //          model: Drawing,
  //          attributes: ['title', 'description']
  //        }
  //     ],
  //     where: {figure 테이블에서 찾고자 원하는 조건을 넣어줬다},
  //     transaction
  //     // transaction을 적용했는데, 적용을 안하고자 한다면 이 부분은 빼면 된다.
  // });
  console.log("teamAndPostInfo::", teamAndPostInfo);
  try {
    if (teamAndPostInfo) {
      res.status(200).json({ data: teamAndPostInfo });
    } else {
      res.status(404).send(" No team found ");
    }
  } catch (err) {
    res.status(500).send(" Internal Server Error ");
  }
};
