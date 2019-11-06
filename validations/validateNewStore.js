const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateNewStore(data){

    let errors = {}

    data.nomeMercado = !isEmpty(data.nomeMercado) ? data.nomeMercado : "";
    data.image = !isEmpty(data.image) ? data.image : "";
    data.mercadoUrl = !isEmpty(data.mercadoUrl) ? data.mercadoUrl : "";
    data.rua = !isEmpty(data.rua) ? data.rua : "";
    data.numero = !isEmpty(data.numero) ? data.numero : "";
    data.complemento = !isEmpty(data.complemento) ? data.complemento : "";
    data.cep = !isEmpty(data.cep) ? data.cep : "";
    data.cidade = !isEmpty(data.cidade) ? data.cidade : "";
    data.estado = !isEmpty(data.estado) ? data.estado : "";

    if(validator.isEmpty(data.nomeMercado))
    {
        errors.nomeMercado = "Nome Mercado is required";
    }

    if(validator.isEmpty(data.image))
    {
        errors.image = "Image Must be Uploaded";
    }

    if(validator.isEmpty(data.mercadoUrl))
    {
        errors.mercadoUrl = "All fields required";
    }
   
    if(validator.isEmpty(data.rua))
    {
        errors.rua = "All fields required";
    }

    if(validator.isEmpty(data.numero))
    {
        errors.numero = "All fields required";
    }

    if(validator.isEmpty(data.complemento))
    {
        errors.complemento = "cAll fields required";
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

    return{
        errors:errors,
        isValid:isEmpty(errors)
    }
}