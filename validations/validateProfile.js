const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateProfileInput(data){

    let errors = {};

    data.cpf = !isEmpty(data.cpf) ? data.cpf : "";
    data.rua = !isEmpty(data.rua) ? data.rua : "";
    data.numero = !isEmpty(data.numero) ? data.numero : "";
    data.complemento = !isEmpty(data.complemento) ? data.complemento : "";
    data.cep = !isEmpty(data.cep) ? data.cep : "";
    data.cidade = !isEmpty(data.cidade) ? data.cidade : "";
    data.estado = !isEmpty(data.estado) ? data.estado : "";
    data.dataNascimento = !isEmpty(data.dataNascimento) ? data.dataNascimento : "";

    if(!validator.isLength(data.cpf, {min:14, max:14}))
    {
        errors.cpf = "Invalid CPF";
    }

    if(validator.isEmpty(data.cpf))
    {
        errors.cpf = "CPF field is empty"
    }

    if(validator.isEmpty(data.rua))
    {
        errors.rua = "Rua must nt be empty";
    }

    if(validator.isEmpty(data.numero))
    {
        errors.numero = "Rua must nt be empty";
    }

    if(!validator.isLength(data.cep, {min:9, max:9}))
    {
        errors.cep = "Invalid CPF";
    }

    if(validator.isEmpty(data.cep))
    {
        errors.cep = "CEP field is empty"
    }

    if(validator.isEmpty(data.cidade))
    {
        errors.cidade = "cidade field is empty"
    }

    if(validator.isEmpty(data.estado))
    {
        errors.estado = "estado field is empty"
    }

    if(validator.isEmpty(data.dataNascimento))
    {
        errors.dataNascimento = "dataNascimento field is empty"
    }

    return{
        errors:errors,
        isValid:isEmpty(errors)
    }
}