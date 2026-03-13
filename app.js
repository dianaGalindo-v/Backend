const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');  //estos paquetes permiten ver en el servidor 

const http = require('http'); //crea un servicio http
const app = express(); //es para crear las api's

app.use(logger('dev')); //para crear archivos de sistma, en consola muestra errores o asi
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res)=> res.status(200).send({
    message: 'Bienvenido a mi api de tienda virtual',
}));

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
module.exports = app;

