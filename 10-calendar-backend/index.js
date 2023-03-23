const express = require('express');
require('dotenv').config();

//crear el servidor de express
const app = express();

//rutas
app.use('/api/auth', require('./routes/auth'));

//directorio publico
app.use(express.static('public'));
//escuchar
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});