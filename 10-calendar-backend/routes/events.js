

//todas validacion del jwt
//obtener eventos
router.get('/', getEventos)
//crear evneto
router.post('/', crearEvento)
//actualizar evneto
router.put('/:id', actualizarEvento)
//borrar evento
router.delete('/:id',eliminarEvento)