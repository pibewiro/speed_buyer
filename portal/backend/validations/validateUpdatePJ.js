const validator = require("validator");
const isEmpty = require("./isEmpty")

module.exports = function validateUpdatePJInputs(data){

    let errors = {};

    data.primeiroNome = !isEmpty(data.primeiroNome) ? data.primeiroNome : "";
    data.sobreNome = !isEmpty(data.sobreNome) ? data.sobreNome : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.usuario = !isEmpty(data.usuario) ? data.usuario : "";
    data.cnpj = !isEmpty(data.cnpj) ? data.cnpj : "";
    data.nomeFantasia = !isEmpty(data.nomeFantasia) ? data.nomeFantasia : "";
    data.razaoSocial = !isEmpty(data.razaoSocial) ? data.razaoSocial : "";
    data.rua = !isEmpty(data.rua) ? data.rua : "";
    data.numero = !isEmpty(data.numero) ? data.numero : "";
    data.complemento = !isEmpty(data.complemento) ? data.complemento : "";
    data.cep = !isEmpty(data.cep) ? data.cep : "";
    data.cidade = !isEmpty(data.cidade) ? data.cidade : "";
    data.estado = !isEmpty(data.estado) ? data.estado : "";

    if(validator.isEmpty(data.primeiroNome))
    {
        errors.primeiroNome = "Primeiro Nome Field is Empty";
    }

    if(validator.isEmpty(data.sobreNome))
    {
        errors.sobreNome = "sobreNome Field is Empty";
    }

    if(!validator.isEmail(data.email))
    {
        errors.email = "email Field is Empty";
    }

    if(validator.isEmpty(data.email))
    {
        errors.email = "email Field is Empty";
    }

    if(validator.isEmpty(data.usuario))
    {
        errors.usuario = "usuario Field is Empty";
    }

    if(!validator.isLength(data.cnpj, {min:18, max:18}))
    {
        errors.cnpj = "CNPJ Invalid";
    }

    if(validator.isEmpty(data.cnpj))
    {
        errors.cnpj = "cnpj Field is Empty";
    }

    if(validator.isEmpty(data.nomeFantasia))
    {
        errors.nomeFantasia = "nomeFantasia Field is Empty";
    }

    if(validator.isEmpty(data.razaoSocial))
    {
        errors.razaoSocial = "razaoSocial Field is Empty";
    }

    if(validator.isEmpty(data.inscricaoEst))
    {
        errors.inscricaoEst = "inscricaoEst Field is Empty";
    }

    if(validator.isEmpty(data.inscricaoMun))
    {
        errors.inscricaoMun = "inscricaoMun Field is Empty";
    }

    if(validator.isEmpty(data.rua))
    {
        errors.rua = "rua Field is Empty";
    }

    if(validator.isEmpty(data.numero))
    {
        errors.numero = "numero Field is Empty";
    }

    if(validator.isEmpty(data.complemento))
    {
        errors.complemento = "complemento Field is Empty";
    }

    if(!validator.isLength(data.cep, {min:9, max:9}))
    {
        errors.cep = "Invalid CEP";
    }

    if(validator.isEmpty(data.cep))
    {
        errors.cep = "cep Field is Empty";
    }

    if(validator.isEmpty(data.cidade))
    {
        errors.cidade = "cidade Field is Empty";
    }

    if(validator.isEmpty(data.estado))
    {
        errors.estado = "estado Field is Empty";
    }

    return{
        isValid:isEmpty(errors),
        errors:errors
    }
}