'use strict';
module.exports = (sequelize, DataTypes) => {
  const otp = sequelize.define('otp', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      references: {
            model: 'user',
            key: 'id'
          },
      allowNull: false,
    //  unique : true,
      type: DataTypes.STRING
    },
    otp: {
      allowNull: false,
      type: DataTypes.STRING
    },
  /*  otp_status: {
      type: DataTypes.STRING
    }*/

  }, {});
  otp.associate = function(models) {
  
    // associations can be defined here
  };
  return otp;
};
