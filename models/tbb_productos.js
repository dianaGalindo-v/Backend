'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tbb_productos extends Model {
    static associate(models) {
      tbb_productos.belongsTo(models.tbc_categorias, {
        as: 'categoria',
        foreignKey: 'categoriaId'
      });
    }
  }

  tbb_productos.init({
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER, // 🔥 mejor INTEGER que DECIMAL
      allowNull: false
    },
    categoriaId: { // 🔥 IMPORTANTE
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'tbb_productos',
    tableName: 'tbb_productos'
  });

  return tbb_productos;
};