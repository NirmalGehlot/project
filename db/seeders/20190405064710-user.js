'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('users', [{
        firstName: 'xyz',
        lastName: 'abc',
        email: 'nirmal.gehlot@cognitiveclouds.com',
        password: '1234',
        phone_number: '919632723045',
        createdAt : new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkDelete('users', null, {});

  }
};
