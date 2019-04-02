'use strict';
const pd = require(__dirname + '/../../product/product');
const sms = require(__dirname + '/../../product/otp');


module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('otps', [{
        phone_number: '919632723045' ,
        message_data: 'FedRamp: Your OTP is:'+ sms.otp() +'. no reply' ,
        message_status : 'delivered',
        //date_time: new Date()
        //createdAt: new Date(),
      //  updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkDelete('otps', null, {});

  }
};
