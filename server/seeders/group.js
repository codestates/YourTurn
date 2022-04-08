"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Groups",
      [
        {
          id: 1,
          name: "리액트 면접 준비",
          desc: "리액트 관련 프론트엔드 개발자를 위한 면접 질문",
          interest_id: 1,
          createdAt: "2022-04-08 00:00:00",
          updatedAt: "2022-04-08 01:00:00",
        },
        {
          id: 2,
          name: "자바스크립트 면접 준비",
          desc: "자바스크립트를 더 자세히 알고 싶다!",
          interest_id: 1,
          createdAt: "2022-04-08 00:00:00",
          updatedAt: "2022-04-08 01:00:00",
        },
        {
          id: 3,
          name: "Node js 면접 준비",
          desc: "백엔드 node js 면접 질문",
          interest_id: 3,
          createdAt: "2022-04-08 00:00:00",
          updatedAt: "2022-04-08 01:00:00",
        },
        {
          id: 4,
          name: "AWS 관련 질문 준비",
          desc: "AWS 배포가 궁금하시다면 들어오세요",
          interest_id: 4,
          createdAt: "2022-04-08 00:00:00",
          updatedAt: "2022-04-08 01:00:00",
        },
        {
          id: 5,
          name: "mysql 면접 질문",
          desc: "mysql 자세하게 알아보기",
          interest_id: 5,
          createdAt: "2022-04-08 00:00:00",
          updatedAt: "2022-04-08 01:00:00",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Groups", null, {});
  },
};
