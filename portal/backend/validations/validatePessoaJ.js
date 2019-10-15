const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validatePessoaJInputs(data){

    let errors = {}

    data.cnpj = !isEmpty(data.cnpj) ? data.cnpj : "";
    data.nomeFantasia = !isEmpty(data.nomeFantasia) ? data.nomeFantasia : "";
    data.razaoSocial = !isEmpty(data.razaoSocial) ? data.razaoSocial : "";
    data.inscricaoMun = !isEmpty(data.inscricaoMun) ? data.inscricaoMun : "";
    data.inscricaoEst = !isEmpty(data.inscricaoEst) ? data.inscricaoEst : "";
    data.rua = !isEmpty(data.rua) ? data.rua : "";
    data.numero = !isEmpty(data.numero) ? data.numero : "";
    data.complemento = !isEmpty(data.complemento) ? data.complemento : "";
    data.cep = !isEmpty(data.cep) ? data.cep : "";
    data.cidade = !isEmpty(data.cidade) ? data.cidade : "";
    data.estado = !isEmpty(data.estado) ? data.estado : "";

    if(!validator.isLength(data.cnpj, {min:18, max:18}))
    {
        errors.cnpj = "CNPJ Invalid";
    }

    if(validator.isEmpty(data.cnpj))
    {
        errors.cnpj = "CNPJ field is empty";
    }

    if(validator.isEmpty(data.nomeFantasia))
    {
        errors.nomeFantasia = "nomeFantasia field is empty";
    }

    if(validator.isEmpty(data.razaoSocial))
    {
        errors.razaoSocial = "razaoSocial field is empty";
    }

    if(validator.isEmpty(data.inscricaoMun))
    {
        errors.inscricaoMun = "inscricaoMun field is empty";
    }

    if(validator.isEmpty(data.inscricaoEst))
    {
        errors.inscricaoEst = "inscricaoEst field is empty";
    }

    if(validator.isEmpty(data.rua))
    {
        errors.rua = "rua field is empty";
    }

    if(validator.isEmpty(data.numero))
    {
        errors.numero = "numero field is empty";
    }

    if(validator.isEmpty(data.complemento))
    {
        errors.complemento = "complemento field is empty";
    }

    if(!validator.isLength(data.cep, {min:9, max:9}))
    {
        errors.cep = "cep Invalid";
    }

    if(validator.isEmpty(data.cep))
    {
        errors.cep = "cep field is empty";
    }

    if(validator.isEmpty(data.cidade))
    {
        errors.cidade = "cidade field is empty";
    }

    if(validator.isEmpty(data.estado))
    {
        errors.estado = "estado field is empty";
    }

    return{
        errors:errors,
        isValid:isEmpty(errors)
    }
}