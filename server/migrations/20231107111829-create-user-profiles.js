'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uspro_id: {
        type: Sequelize.INTEGER
      },
      uspro_national_id: {
        type: Sequelize.STRING
      },
      uspro_birt_date: {
        type: Sequelize.DATE
      },
      uspro_job_title: {
        type: Sequelize.STRING
      },
      uspro_marital_status: {
        type: Sequelize.STRING
      },
      uspro_gender: {
        type: Sequelize.STRING
      },
      uspro_addr_id: {
        type: Sequelize.INTEGER
      },
      uspro_user_id: {
        type: Sequelize.INTEGER
      },
      uspro_addr_id: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('user_profiles');
  }
};