'use strict';
module.exports = (sequelize, DataTypes) => {
  const otp = sequelize.define('otp', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    phone_number: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    message_data : {
      allowNull: false,
      type :DataTypes.STRING
    },
    message_status : {
      allowNull: false,
      type : DataTypes.STRING
    }
  }, {});
  otp.associate = function(models) {
    // associations can be defined here
  };
  return otp;
};
