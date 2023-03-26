
const {Router} = require('express');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

//todas validacion del jwt
//obtener eventos
router.get('/', 
[ validarJWT ], 
getEventos)
//crear evneto
router.post('/', 
[ validarJWT ],
crearEvento)
//actualizar evneto
router.put('/:id', 
[ validarJWT ],
actualizarEvento)
//borrar evento
router.delete('/:id',
[ validarJWT ],
eliminarEvento)

module.exports = router;