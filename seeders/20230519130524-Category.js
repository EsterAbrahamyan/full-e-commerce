'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Category', [
      {
       name:"Տորթեր",
      },
      {
        name:"Թխվածքներ",
       },
       {
        name:"Քաղցրավենիք",
        
       },
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Category', null, {});
  }
};
