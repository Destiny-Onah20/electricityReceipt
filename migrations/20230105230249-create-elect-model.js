'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('electModels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      District: {
        type: Sequelize.STRING
      },
      meterNum: {
        type: Sequelize.DOUBLE
      },
      monthlyDue: {
        type: Sequelize.DOUBLE
      },
      meterCount: {
        type: Sequelize.DOUBLE
      },
      vat: {
        type: Sequelize.INTEGER
      },
      amountPaid: {
        type: Sequelize.DOUBLE
      },
      balance: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('electModels');
  }
};