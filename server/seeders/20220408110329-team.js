"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "teams",
      [
        {
          id: 1,
          team_name: "리액트 면접 준비",
          team_description: "리액트 관련 프론트엔드 개발자를 위한 면접 질문",
          interest_id: 1,
          createdAt: "2022-04-08 00:00:00",
          updatedAt: "2022-04-08 01:00:00",
        },
        {
          id: 2,
          team_name: "자바스크립트 면접 준비",
          team_description: "자바스크립트를 더 자세히 알고 싶다!",
          interest_id: 1,
          createdAt: "2022-04-08 00:00:00",
          updatedAt: "2022-04-08 01:00:00",
        },
        {
          id: 3,
          team_name: "Node js 면접 준비",
          team_description: "백엔드 node js 면접 질문",
          interest_id: 3,
          createdAt: "2022-04-08 00:00:00",
          updatedAt: "2022-04-08 01:00:00",
        },
        {
          id: 4,
          team_name: "AWS 관련 질문 준비",
          team_description: "AWS 배포가 궁금하시다면 들어오세요",
          interest_id: 4,
          createdAt: "2022-04-08 00:00:00",
          updatedAt: "2022-04-08 01:00:00",
        },
        {
          id: 5,
          team_name: "mysql 면접 질문",
          team_description: "mysql 자세하게 알아보기",
          interest_id: 5,
          createdAt: "2022-04-08 00:00:00",
          updatedAt: "2022-04-08 01:00:00",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("teams", null, {});
  },
};
