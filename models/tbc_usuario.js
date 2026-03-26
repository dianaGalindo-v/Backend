'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbc_usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbc_usuario.init({
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    
    direccion:{ 
    typr: DataTypes.STRING(200),
    allowNull: false
    },
    telefono:{
      type: DataTypes.STRING(15),
      allowNull: false
    },
    email: {
    type: DataTypes.STRING(120),
    allowNull: false
    },
    rol: {
    type: DataTypes.EMUN('admin', 'client'),
    allowNull: false,
    defaultValue: 'client'
    },
    fecha_registro:{

    type: DataTypes.Date,
    allowNull: false

    },
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbc_usuario',
  });
  return tbc_usuario;
};