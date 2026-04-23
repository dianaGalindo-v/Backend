const Sequelize = require('sequelize');
const models = require('../models');
const carrito = models.tbb_carritos;

module.exports = {
    create(req, res){
        return carrito
        .create({
            total: req.body.total,
            estado: req.body.estado,
            fecha_creacion: req.body.fecha_creacion || new Date(),
            id_usuario: req.body.id_usuario,
        })
        .then(carritoItem => res.status(200).send(carritoItem))
        .catch(error => res.status(400).send(error));
    },
    list(req, res){
        const where = {};
        if (req.query.id_usuario) {
            where.id_usuario = req.query.id_usuario;
        }

        return carrito.findAll({
            where,
            include: [
                {
                    model: models.tbd_carrito_detalle,
                    as: 'detalles',
                    include: [
                        {
                            model: models.tbb_productos,
                            as: 'producto',
                        }
                    ]
                }
            ]
        })
        .then(carritos => res.status(200).send(carritos))
        .catch(error => res.status(400).send(error));
    },
    find(req, res){
        const id = req.params.id;

        if (id) {
            return carrito.findByPk(id, {
                include: [
                    {
                        model: models.tbd_carrito_detalle,
                        as: 'detalles',
                        include: [
                            {
                                model: models.tbb_productos,
                                as: 'producto',
                            }
                        ]
                    }
                ]
            })
            .then(carritoItem => {
                if (!carritoItem) {
                    return res.status(404).send({message: 'Carrito no encontrado'});
                }
                return res.status(200).send(carritoItem);
            })
            .catch(error => res.status(400).send(error));
        }

        return res.status(400).send({message: 'Debe proporcionar id para buscar'});
    },
    update(req, res){
        const id = req.params.id;
        return carrito.findByPk(id)
        .then(carritoItem => {
            if (!carritoItem) {
                return res.status(404).send({message: 'Carrito no encontrado'});
            }
            return carritoItem.update({
                total: req.body.total,
                estado: req.body.estado,
                fecha_creacion: req.body.fecha_creacion || carritoItem.fecha_creacion,
                id_usuario: req.body.id_usuario,
            })
            .then(updated => res.status(200).send(updated))
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },
    delete(req, res){
        const id = req.params.id;
        return carrito.findByPk(id)
        .then(carritoItem => {
            if (!carritoItem) {
                return res.status(404).send({message: 'Carrito no encontrado'});
            }
            return carritoItem.destroy()
            .then(() => res.status(200).send({message: 'Carrito eliminado'}))
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },
};
