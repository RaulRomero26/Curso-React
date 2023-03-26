const { response } = require('express')
const Evento = require('../models/Evento')

const getEventos = async (req,res = response) => {

    const eventos = await Evento.find()
    .populate('user','name');

    return res.status(200).json({
        ok: true,
        eventos
    })
}

const crearEvento = async (req,res = response) => {
    //verificar que tenfga el evento


    const evento = new Evento(req.body)

    try {
        evento.user = req.uid;
        const eventoGuardado = await evento.save()
        return res.status(201).json({
            ok: true,
            evento: eventoGuardado
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


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