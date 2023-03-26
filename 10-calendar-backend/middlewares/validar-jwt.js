const {response} = require('express')
const jwt = require('jsonwebtoken')


const validarJWT = ( req, res = response, next ) => {

    //x-token en los headers
    const token = req.header('x-token');
    if( !token ){
        return res.status(401).json({
            ok: false,
            msg: 'No hay un token en la peticion'
        });
    }

    try {

        const {uid,name} = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        )
        //se realmacena en el req para que pase por referencia y sea de facil acceso
        req.uid = uid;
        req.name = name;

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no valido'
        });
    }
    next();

}

module.exports ={
    validarJWT
}