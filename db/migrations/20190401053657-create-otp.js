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
      user_id: {
         allowNull: false,
         //unique : true,
         type: DataTypes.STRING
       },
       otp: {
         allowNull: false,
         type: DataTypes.STRING
       },
       /*otp_status: {
         type: DataTypes.STRING
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
