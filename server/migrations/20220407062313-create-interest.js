"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("interests", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      interest_name: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("interests");
  },
};
