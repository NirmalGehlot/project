'use strict';
module.exports = (sequelize, DataTypes) => {
  const smslog = sequelize.define('smslog', {
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
      //unique: true,
      type: DataTypes.INTEGER
    },
    message_data : {
      allowNull: false,
      type :DataTypes.STRING
    },
    message_status : {
      allowNull: false,
      type : DataTypes.STRING
    },
    req_type : {
      type:DataTypes.STRING
    }
  }, {});
  smslog.associate = function(models) {
    // associations can be defined here
  };
  return smslog;
};
