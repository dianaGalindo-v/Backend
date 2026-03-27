const sequelize =require('sequelize');
const db = require('../models');
const categorias = db.tbc_categorias;

module.exports = {

  //CREAR CATEGORIA
  create(req, res) {
    return categorias.create({
        nombre: req.body.nombre
      })
      .then(categoria => res.status(200).send(categoria))
      .catch(error => res.status(400).send(error));
  },
  //LISTAR TODAS
  list(req, res) {
    return categorias
      .findAll()
      .then(categorias => res.status(200).send(categorias))
      .catch(error => res.status(400).send(error));
  },

  //BUSCAR POR NOMBRE
  find(req, res) {
    return categorias.findAll({
        where: {
          nombre: req.params.nombre
        }
      })
      .then(categorias => res.status(200).send(categorias))
      .catch(error => res.status(400).send(error));
  },
  delete(req, res){
    return categorias.destroy({
      where:{
        id:req.params.id
      }
    })
    .then(() => res.status(200).send({mensaje:"Datos eliminados"+" correctamente"}))
    .catch(error => res.status(400).send(error))
  },
  update(req, res){
    return categorias.update(
      {
        nombre: req.body.nombre
      },
      {
        where:{
          id:req.params.id
        }
    }
  )
    .then(() => res.status(200).send({mensaje:"Datos actualizados correctamente"}))
    .catch(error => res.status(400).send(error))
  }
};