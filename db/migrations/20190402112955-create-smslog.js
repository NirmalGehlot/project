'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('smslogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      user_id : {
        allowNull: false,
        //unique: true,
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
      req_type :{
        type :DataTypes.STRING
      },
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
    return queryInterface.dropTable('smslogs');
  }
};
