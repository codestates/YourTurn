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
            "리액트로 useState를 활용해 봅시다",
          user_id: 1,
          post_id: 1,
          createdAt: "2022-03-08 00:00:00",
          updatedAt: "2022-03-08 10:00:00",
        },
        {
          id: 2,
          content:
            "자바스크립트는 v8 엔진을 사용합니다.",
          user_id: 2,
          post_id: 2,
          createdAt: "2022-03-09 00:00:00",
          updatedAt: "2022-03-09 10:00:00",
        },
        {
          id: 3,
          content:
            "Redux를 사용해서 전역적으로 상태를 관리할 수 있다.",
          user_id: 1,
          post_id: 3,
          createdAt: "2022-03-10 00:00:00",
          updatedAt: "2022-03-10 10:00:00",
        },
        {
          id: 4,
          content:
            "DB에는 SQL과 NoSQL이 있다. Mysql, MongoDB",
          user_id: 2,
          post_id: 4,
          createdAt: "2022-03-11 00:00:00",
          updatedAt: "2022-03-11 10:00:00",
        },
        {
          id: 5,
          content:
            "Node.js로 자바스크립트로 서버를 만들 수 있다.",
          user_id: 1,
          post_id: 5,
          createdAt: "2022-03-12 00:00:00",
          updatedAt: "2022-03-12 10:00:00",
        },
        {
          id: 6,
          content:
            "AWS를 사용해서 배포 자동화 만들기",
          user_id: 2,
          post_id: 6,
          createdAt: "2022-03-13 00:00:00",
          updatedAt: "2022-03-13 10:00:00",
        },
        {
          id: 7,
          content:
            "Mysql 쿼리문 select * from users;",
          user_id: 1,
          post_id: 7,
          createdAt: "2022-03-14 00:00:00",
          updatedAt: "2022-03-14 10:00:00",
        },
        {
          id: 8,
          content:
            "EC2, S3, RDS로 배포 하자. 자동화는 나중에 생각하자",
          user_id: 2,
          post_id: 8,
          createdAt: "2022-03-15 00:00:00",
          updatedAt: "2022-03-15 10:00:00",
        },
        {
          id: 9,
          content: "React에서 컴포넌트 단위로 개발하면 더 쉽다.",
          user_id: 1,
          post_id: 9,
          createdAt: "2022-03-16 00:00:00",
          updatedAt: "2022-03-16 10:00:00",
        },
        {
          id: 10,
          content: "자바스크립트 React, 바닐라 자바스크립트, Redux, Redux saga",
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
