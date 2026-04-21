'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tableDescription = await queryInterface.describeTable('tbb_productos');
    if (!tableDescription.imagen) {
      return queryInterface.addColumn('tbb_productos', 'imagen', {
        type: Sequelize.STRING(255),
        allowNull: true,
      });
    }
  },

  async down(queryInterface, Sequelize) {
    const tableDescription = await queryInterface.describeTable('tbb_productos');
    if (tableDescription.imagen) {
      return queryInterface.removeColumn('tbb_productos', 'imagen');
    }
  }
};
