'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_bonus_points', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ubpo_id: {
        type: Sequelize.INTEGER
      },
      ubpo_user_id: {
        type: Sequelize.INTEGER
      },
      ubpo_total_points: {
        type: Sequelize.SMALLINT
      },
      ubpo_bonus_type: {
        type: Sequelize.STRING
      },
      ubpo_created_on: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_bonus_points');
  }
};