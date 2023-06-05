'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cart', [
      {
        user_id:1
      },
      {
        user_id:2
       },
       {
        user_id:3
        
       },
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cart', null, {});
  }
};
