'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('smslogs', [{
        user_id: '1' ,
        message_data: 'FedRamp: Your OTP is:'+ 502552+'. no reply' ,
        message_status : 'delivered',
        req_type:'',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkDelete('smslogs', null, {});

  }
};
