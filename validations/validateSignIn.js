const validator = require("validator");
const isEmpty = require("./isEmpty")

module.exports = function validateSignInInput(data) {

    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : "";
    data.senha = !isEmpty(data.senha) ? data.senha : "";


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

    return{
        errors:errors,
        isValid:isEmpty(errors)
    }


}