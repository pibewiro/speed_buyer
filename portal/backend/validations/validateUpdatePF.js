const validator = require("validator");
const isEmpty = require("./isEmpty")

module.exports = function validatePFUpdateInputs(data)
{
    let errors = {};

    data.cpf = !isEmpty(data.cpf) ? data.cpf : "";
    data.rua = !isEmpty(data.rua) ? data.rua : "";
    data.numero = !isEmpty(data.numero) ? data.numero : "";
    data.cep = !isEmpty(data.cep) ? data.cep: "";
    data.cidade = !isEmpty(data.cidade) ? data.cidade : "";
    data.etado = !isEmpty(data.etado) ? data.etado : "";
    data.primeiroNome = !isEmpty(data.primeiroNome) ? data.primeiroNome : "";
    data.sobreNome = !isEmpty(data.sobreNome) ? data.sobreNome : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.usuario = !isEmpty(data.usuario) ? data.usuario : "";
    data.dataNascimento = !isEmpty(data.dataNascimento) ? data.dataNascimento : "";

    if(validator.isEmpty(data.primeiroNome))
    {
        errors.primeiroNome = "Primeiro Nome Field is empty"
    }

    if(validator.isEmpty(data.sobreNome))
    {
        errors.sobreNome = "sobreNome Field is empty"
    }

    if(!validator.isLength(data.dataNascimento, {min:10, max:10}))
    {
        errors.dataNascimento = "Data Invalida"
    }

    if(validator.isEmpty(data.dataNascimento))
    {
        errors.dataNascimento = "dataNascimento Field is empty"
    }

    if(!validator.isLength(data.cpf, {min:14, max:14}))
    {
        errors.cpf = "CPF Invalida"
    }

    if(validator.isEmpty(data.cpf))
    {
        errors.cpf = "cpf Field is empty"
    }

    if(!validator.isEmail(data.email))
    {
        errors.email = "email Invalid"
    }

    if(validator.isEmpty(data.email))
    {
        errors.email = "email Field is empty"
    }

    if(validator.isEmpty(data.usuario))
    {
        errors.usuario = "usuario Field is empty"
    }

    if(validator.isEmpty(data.rua))
    {
        errors.rua = "rua Field is empty"
    }

    if(validator.isEmpty(data.numero))
    {
        errors.numero = "numero Field is empty"
    }

    if(!validator.isLength(data.cep, {min:9, max:9}))
    {
        errors.cep = "cep Invalid"
    }

    if(validator.isEmpty(data.cep))
    {
        errors.cep = "cep Field is empty"
    }

    if(validator.isEmpty(data.cidade))
    {
        errors.cidade = "cidade Field is empty"
    }

    if(validator.isEmpty(data.estado))
    {
        errors.estado = "estado Field is empty"
    }

    return{
        isValid:isEmpty(errors),
        errors:errors
    }
}