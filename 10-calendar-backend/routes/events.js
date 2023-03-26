
const {Router} = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos')
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');
const { isDate } = require('../helpers/isDate');
const router = Router();

//si quieres validar todos los endpoint con un middleware,
router.use(validarJWT)
//todas validacion del jwt
//obtener eventos
router.get('/',  
getEventos)
//crear evneto
router.post('/', 
[
    check('title','El tutlo es oblogatorio').not().isEmpty(),
    check('start','Fecha de inicio es oblogatoria').custom(isDate),
    check('end','Fecha de finalizacion es oblogatoria').custom(isDate),
    validarCampos
],
crearEvento)
//actualizar evneto
router.put('/:id', 
actualizarEvento)
//borrar evento
router.delete('/:id',
eliminarEvento)

module.exports = router;