const productosController = require('../controller/controller_producto');

module.exports = (app) => {
    app.get('/api/productos', productosController.list);
    app.get('/api/productos/:nombre', productosController.find);
    app.post('/api/productos', productosController.create);
    app.delete('/api/productos/:id', productosController.delete);
    app.put('/api/productos/:id', productosController.update);
};
