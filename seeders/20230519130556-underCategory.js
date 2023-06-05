'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('underCategory', [
      {
        name:"Հարսանեկան",
        category_id:1
       },
       {
         name:"Ծննդյան",
         category_id:1
        },
        {
         name:"Շերտավոր",
         category_id:2
         
        },
        {
         name:"Բիսկվիթային",
         category_id:2
         
        },
        {
         name:"Մակարուն",
         category_id:3
         
        },
        {
         name:"Շոկոլադապատ մրգեր",
         category_id:3
         
        },
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('underCategory', null, {});
  }
};
