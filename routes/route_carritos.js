const carritosController = require('../controller/controller_carrito');

module.exports = (app) => {
    app.get('/api/carritos', carritosController.list);
    app.get('/api/carritos/:id', carritosController.find);
    app.post('/api/carritos', carritosController.create);
    app.delete('/api/carritos/:id', carritosController.delete);
    app.put('/api/carritos/:id', carritosController.update);
};
