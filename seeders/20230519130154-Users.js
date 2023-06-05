'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
       firstname:"Armen",
       lastname:"Asatryan",
       email:"armen@gmail.com",
       password:123,
       role: "user",
       isverified:0
      },
      {
       firstname:"Harut",
       lastname:"Abgaryan",
       email:"harut@gmail.com",
       password:456,
       role: "user",
       isverified:0
       },
       {
       firstname:"Anna",
       lastname:"Babayan",
       email:"anna@gmail.com",
       password:789,
       role: "user",
       isverified:0
       },
            
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
