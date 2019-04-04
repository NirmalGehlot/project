'use strict';
module.exports = (sequelize, DataTypes) => {
  const smslog = sequelize.define('smslog', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    phone_number: {
      allowNull: false,
      unique : true,
      type: DataTypes.STRING
    },
    otp: {
      allowNull: false,
      type: DataTypes.STRING
    },
    otp_status: {
      type: DataTypes.STRING
    }
  }, {});
  smslog.associate = function(models) {
    // associations can be defined here
  };
  return smslog;
};
