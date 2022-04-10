"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          nickname: "Kimcoding",
          email: "kimcoding@codestates.com",
          password: "1234",
          createdAt: "2022-04-08 00:00:00",
          updatedAt: "2022-04-08 01:00:00",
        },
        {
          id: 2,
          nickname: "Parkhacker",
          email: "parkhacker@codestates.com",
          password: "1234",
          createdAt: "2022-04-08 00:00:00",
          updatedAt: "2022-04-08 01:00:00",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
