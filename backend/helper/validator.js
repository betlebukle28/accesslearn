const validator = require('validator');

const validarRegistro = (parametros) => {   
    console.log("Entro a validarRegistro");
    console.log(parametros);
    if(!validator.isEmail(parametros.email) && validator.isEmpty(parametros.email)){
        console.log("isEmail ", email);
        return false;
    }
    if(!validator.isAlpha(parametros.Nombre) && validator.isEmpty(parametros.Nombre)){
        console.log("Nombre ", Nombre);
        return false;
    }
    if(!validator.isAlpha(parametros.ApellidoPaterno) && validator.isEmpty(parametros.ApellidoPaterno)){
        console.log("ApellidoPaterno ", ApellidoPaterno);
        return false;
    }
    if(!validator.isAlpha(parametros.ApellidoMaterno) && validator.isEmpty(parametros.ApellidoMaterno)){
        console.log("ApelldioMaterno ", ApellidoMaterno);
        return false;
    }
    if(validator.isEmpty(parametros.Usuario)){
        console.log("Usuario ", Usuario);
        return false;
    }
    if(!validator.isAlphanumeric(parametros.password) && validator.isEmpty(parametros.password)){
        console.log("password ", password);
        return false;
    }
    if(!validator.isMobilePhone(parametros.Telefono) && validator.isEmpty(parametros.Telefono)){
        console.log("Telefono ", Telefono);
        return false;
    }
    return true;
}

module.exports = {validarRegistro};