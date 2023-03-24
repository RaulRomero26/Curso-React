const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config')

//crear el servidor de express
const app = express();
//conexion con la db
dbConnection()

//directorio publico
app.use(express.static('public'));
//lectura y parseo del body
app.use(express.json());

//rutas
app.use('/api/auth', require('./routes/auth'));


//escuchar
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});