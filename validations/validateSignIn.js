const validator = require("validator");
const isEmpty = require("./isEmpty")

module.exports = function validateSignInInput(data) {

    let errors = {};

    data.cpf_cnpj = !isEmpty(data.cpf_cnpj) ? data.cpf_cnpj : "";
    data.senha = !isEmpty(data.senha) ? data.senha : "";

    if(validator.isEmpty(data.cpf_cnpj))
    {
        errors.cpf_cnpj = "cpf_cnpj is required"
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