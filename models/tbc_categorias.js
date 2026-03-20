'use strict';
const {
  Model
} = require('sequelize');
const tbb_productos = require('./tbb_productos');
module.exports = (sequelize, DataTypes) => {
  class tbc_categorias extends Model {
    static associate(models) {
      // define association here
    }
  }
  tbc_categorias.init({
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'tbc_categorias',
  });//NUEVOOOO
  tbc_categorias.associate = function(models){
    tbb_productos.belongsTo(models.tbc_categorias,
      {
        as: 'categoria',
        foreignKey: 'categoria_id',
      }
    );
  };
  return tbc_categorias;
};
