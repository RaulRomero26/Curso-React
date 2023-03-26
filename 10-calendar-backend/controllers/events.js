const { response } = require('express')

const getEventos = (req,res = response) => {

    return res.status(200).json({
        ok: true,
        msg: 'get evnetos'
    })
}
const crearEvento = (req,res = response) => {
    //verificar que tenfga el evento
    console.log(req.body);

    return res.status(200).json({
        ok: true,
        msg: 'crear evento'
    })
}
const actualizarEvento = (req,res = response) => {

    return res.status(200).json({
        ok: true,
        msg: 'actualizar evento'
    })
}
const eliminarEvento = (req,res = response) => {

    return res.status(200).json({
        ok: true,
        msg: 'eliminar evnento'
    })
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}