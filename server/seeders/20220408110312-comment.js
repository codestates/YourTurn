"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Comments",
      [
        // {
        //   id: 1,
        //   content: "dfdfdfdfdf",
        //   user_id: 1,
        //   post_id: 1,
        //   createdAt: "2022-01-01 00:00:00",
        //   updatedAt: "2022-01-01 10:00:00",
        // },
        {
          id: 1,
          content:
            "국회의 정기회는 법률이 정하는 바에 의하여 매년 1회 집회되며, 국회의 임시회는 대통령 또는 국회재적의원 4분의 1 이상의 요구에 의하여 집회된다.",
          user_id: 1,
          post_id: 1,
          createdAt: "2022-03-08 00:00:00",
          updatedAt: "2022-03-08 10:00:00",
        },
        {
          id: 2,
          content:
            "환경권의 내용과 행사에 관하여는 법률로 정한다. 국회는 법률에 저촉되지 아니하는 범위안에서 의사와 내부규율에 관한 규칙을 제정할 수 있다.",
          user_id: 2,
          post_id: 2,
          createdAt: "2022-03-09 00:00:00",
          updatedAt: "2022-03-09 10:00:00",
        },
        {
          id: 3,
          content:
            "환경권의 내용과 행사에 관하여는 법률로 정한다. 국회는 법률에 저촉되지 아니하는 범위안에서 의사와 내부규율에 관한 규칙을 제정할 수 있다.",
          user_id: 1,
          post_id: 3,
          createdAt: "2022-03-10 00:00:00",
          updatedAt: "2022-03-10 10:00:00",
        },
        {
          id: 4,
          content:
            "이 헌법시행 당시의 법령과 조약은 이 헌법에 위배되지 아니하는 한 그 효력을 지속한다.",
          user_id: 2,
          post_id: 4,
          createdAt: "2022-03-11 00:00:00",
          updatedAt: "2022-03-11 10:00:00",
        },
        {
          id: 5,
          content:
            "지방의회의 조직·권한·의원선거와 지방자치단체의 장의 선임방법 기타 지방자치단체의 조직과 운영에 관한 사항은 법률로 정한다.",
          user_id: 1,
          post_id: 5,
          createdAt: "2022-03-12 00:00:00",
          updatedAt: "2022-03-12 10:00:00",
        },
        {
          id: 6,
          content:
            "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 내부규율에 관한 규칙을 제정할 수 있다.",
          user_id: 2,
          post_id: 6,
          createdAt: "2022-03-13 00:00:00",
          updatedAt: "2022-03-13 10:00:00",
        },
        {
          id: 7,
          content:
            "학교교육 및 평생교육을 포함한 교육제도와 그 운영, 교육재정 및 교원의 지위에 관한 기본적인 사항은 법률로 정한다.",
          user_id: 1,
          post_id: 7,
          createdAt: "2022-03-14 00:00:00",
          updatedAt: "2022-03-14 10:00:00",
        },
        {
          id: 8,
          content:
            "모든 국민은 법 앞에 평등하다. 누구든지 성별·종교 또는 사회적 신분에 의하여 정치적·경제적·사회적·문화적 생활의 모든 영역에 있어서 차별을 받지 아니한다.",
          user_id: 2,
          post_id: 8,
          createdAt: "2022-03-15 00:00:00",
          updatedAt: "2022-03-15 10:00:00",
        },
        {
          id: 9,
          content: "저작자·발명가·과학기술자와 예술가의 권리는 법률로써 보호한다.",
          user_id: 1,
          post_id: 9,
          createdAt: "2022-03-16 00:00:00",
          updatedAt: "2022-03-16 10:00:00",
        },
        {
          id: 10,
          content: "공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다.",
          user_id: 2,
          post_id: 10,
          createdAt: "2022-03-17 00:00:00",
          updatedAt: "2022-03-17 10:00:00",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
