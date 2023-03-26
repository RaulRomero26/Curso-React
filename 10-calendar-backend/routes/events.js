
const {Router} = require('express');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

//si quieres validar todos los endpoint con un middleware,
router.use(validarJWT)
//todas validacion del jwt
//obtener eventos
router.get('/',  
getEventos)
//crear evneto
router.post('/', 
crearEvento)
//actualizar evneto
router.put('/:id', 
actualizarEvento)
//borrar evento
router.delete('/:id',
eliminarEvento)

module.exports = router;