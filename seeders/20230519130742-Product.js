'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Product', [
      {
        name: "Տորթ/կոդ N1",
        price: 1000,
        image: "https://wedding.am/sites/default/files/styles/wedding_large/public/blog/60299afa0ed0fba0fe427f200ee52b05.jpg?itok=WgQvUMiD",
        description: "տորթ",
        underCategory_id: 1
      },
      {
        name: "Տորթ/կոդ N2",
        price: 1100,
        image: "https://www.karinecake.com/frontend/web/upload/m/saS_1466108385.jpg",
        description: "տորթ",
        underCategory_id: 1
       },
       {
        name: "Տորթ/կոդ N3",
        price: 700,
        image: "https://mytort.am/wp-content/uploads/IMG_20211218_161901_745.jpg",
        description: "տորթ",
        underCategory_id: 2
       },
       {
        name: "Տորթ/կոդ N4",
        price: 800,
        image: "https://anemonsalon.com/3380-large_default/%D5%BF%D5%B8%D6%80%D5%A9-0303.jpg",
        description: "տորթ",
        underCategory_id: 2
       },
       {
        name: "Նապոլեոն",
        price: 600,
        image: "https://i.obozrevatel.com/food/recipemain/2019/2/22/vchart.jpg?size=375x250",
        description: "Նապոլեոն",
        underCategory_id: 3
       },
       {
        name: "Փախլավա",
        price: 700,
        image: "https://static.parma.am/origin/product/1024/00050(1).jpg",
        description: "Փախլավա",
        underCategory_id: 3
       },
       {
        name: "Էսկիմո",
        price: 700,
        image: "https://tema.am/wp-content/uploads/2022/01/Fotoram.io-2022-01-30T200239.762.jpg",
        description: "Էսկիմո",
        underCategory_id: 4
       },
       {
        name: "Լիմոնով",
        price: 600,
        image: "https://baxadratomser.am/wp-content/uploads/2020/12/%D4%BC%D5%AB%D5%B4%D5%B8%D5%B6%D5%B8%D5%BE-%D5%BF%D5%B8%D6%80%D5%A9.jpg",
        description: "Լիմոնով",
        underCategory_id: 4
       },
       {
        name: "Մակարուն 1",
        price: 600,
        image: "https://media.istockphoto.com/id/507272489/id/foto/macaroon-berwarna-warni.jpg?s=612x612&w=0&k=20&c=C8XvP5hGkT4MZpu9LQQ0RcR32o6Klo5RP88H_AxnVcs=",
        description: "Մակարուն 1",
        underCategory_id: 5
       },
       {
        name: "Մակարուն 1",
        price: 600,
        image: "https://buy.am/media/image/9f/6c/85/french____macaroons_600x600.jpg",
        description: "Մակարուն 1",
        underCategory_id: 5
       },
       
       {
        name: "Շոկոլադապատ ելակ",
        price: 6000,
        image: "https://static.4u.am/origin/product/1024/2nzFpiHuI9PEwlFo.jpg",
        description: "12 հատ",
        underCategory_id: 6
       },
       {
        name: "Շոկոլադապատ բանան",
        price: 3000,
        image: "https://impoqrik.am/images/cache/8f598f23713cbea28a6d177f9d594f05_w870_h390.jpg",
        description: "6 հատ",
        underCategory_id: 6
       },
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Product', null, {});
  }
};
