const validator = require("validator");
const isEmpty = require("./isEmpty")

module.exports = function validateSignUpInput(data) {

    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : "";
    data.senha = !isEmpty(data.senha) ? data.senha : "";
    data.primeiroNome = !isEmpty(data.primeiroNome) ? data.primeiroNome : "";
    data.sobreNome = !isEmpty(data.sobreNome) ? data.sobreNome : "";
    data.usuario = !isEmpty(data.usuario) ? data.usuario : "";


    if(!validator.isEmail(data.email))
    {
        errors.email = "Invalid Email Input"
    }

    if(validator.isEmpty(data.email))
    {
        errors.email = "Email is required"
    }

    //senha
    if(!validator.isLength(data.senha, {min:6, max:30}))
    {
        errors.senha = "senha must contain between 6 to 30 characters"
    }

    if(validator.isEmpty(data.senha))
    {
        errors.senha = "Senha is required"
    }

    //usuario
    if(!validator.isLength(data.usuario, {min:6, max:30}))
    {
        errors.usuario = "Password must contain between 6 to 30 characters"
    }

    if(validator.isEmpty(data.usuario))
    {
        errors.usuario = "usuario is required"
    }

    //primeiro nome
    if(!validator.isLength(data.primeiroNome, {min:2, max:30}))
    {
        errors.primeiroNome = "primeiroNome must contain between 2 to 30 characters"
    }

    if(validator.isEmpty(data.primeiroNome))
    {
        errors.primeiroNome = "primeiroNome is required"
    }

    //Sobre nome
    if(!validator.isLength(data.sobreNome, {min:2, max:30}))
    {
        errors.sobreNome = "sobreNome must contain between 2 to 30 characters"
    }

    if(validator.isEmpty(data.sobreNome))
    {
        errors.sobreNome = "sobreNome is required"
    }
    
    return{
        errors:errors,
        isValid:isEmpty(errors)
    }


}