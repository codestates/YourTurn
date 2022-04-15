"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "interests",
      [
        {
          id: 1,
          interest_name: "React",
        },
        {
          id: 2,
          interest_name: "Javascript",
        },
        {
          id: 3,
          interest_name: "node js",
        },
        {
          id: 4,
          interest_name: "AWS",
        },
        {
          id: 5,
          interest_name: "mysql",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("interests", null, {});
  },
};
