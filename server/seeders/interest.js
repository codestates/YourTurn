
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Interests",
      [
        {
          id: 1,
          name: "React"
        },
        {
          id: 2,
          name: "Javascript"
        },
        {
          id: 3,
          name: "node js"
        },
        {
          id: 4,
          name: "AWS"
        },
        {
          id: 5,
          name: "mysql"
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Interests", null, {});
  },
};
