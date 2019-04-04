'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('otps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      phone_number: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      },
      message_data : {
        allowNull: false,
        type :DataTypes.STRING
      },
      message_status : {
        allowNull: false,
        type : DataTypes.STRING
      },
    /*  date_time: {
        allowNull: false,
        type: DataTypes.DATE
      },*/
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('otps');
  }
};
