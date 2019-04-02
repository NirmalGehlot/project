'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('otps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      phone_number: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      message_data : {
        allowNull: false,
        type :Sequelize.STRING
      },
      message_status : {
        allowNull: false,
        type : Sequelize.STRING
      },
    /*  date_time: {
        allowNull: false,
        type: Sequelize.DATE
      },*/
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('otps');
  }
};
