const validator = require('validator');

const validarRegistro = (parametros) => {
    if(!validator.isEmail(parametros.email) && !validator.isEmpty(parametros.email)){
        return false;
    }
    if(!validator.isAlpha(parametros.nombreCompleto) && !validator.isEmpty(parametros.nombreCompleto)){
        return false;
    }
    if(!validator.isEmpty(parametros.usuario)){
        return false;
    }
    if(!validator.isAlphanumeric(parametros.password) && !validator.isEmpty(parametros.password)){
        return false;
    }
    if(!validator.isMobilePhone(parametros.telefono) && !validator.isEmpty(parametros.telefono)){
        return false;
    }
    return true;
}

module.exports = {validarRegistro};