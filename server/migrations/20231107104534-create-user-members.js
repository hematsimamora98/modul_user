'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_members', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usme_user_id: {
        type: Sequelize.INTEGER
      },
      usme_memb_name: {
        type: Sequelize.STRING
      },
      usme_promote_date: {
        type: Sequelize.DATE
      },
      usme_points: {
        type: Sequelize.SMALLINT
      },
      usme_type: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('user_members');
  }
};