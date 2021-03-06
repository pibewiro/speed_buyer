const validator = require("validator");
const isEmpty = require("./isEmpty");
const fileType = require("./fileType");

module.exports = function validateNewStore(data){

    let errors = {}

    data.nomeMercado = !isEmpty(data.nomeMercado) ? data.nomeMercado : "";
    data.image = !isEmpty(data.image) ? data.image : "";
    data.mercadoUrl = !isEmpty(data.mercadoUrl) ? data.mercadoUrl : "";
    data.imageURL = !isEmpty(data.imageURL) ? data.imageURL : "";

    if(validator.isEmpty(data.nomeMercado))
    {
        errors.nomeMercado = "Nome Mercado is required";
    }

    if(validator.isEmpty(data.imageURL))
    {
        errors.imageURL = "Image Must be Uploaded";
    }

    else if(!fileType(data.fileType))
    {
        errors.imageURL = "Invalid Type"
    }

    if(validator.isEmpty(data.mercadoUrl))
    {
        errors.mercadoUrl = "All fields required";
    }

    return{
        errors:errors,
        isValid:isEmpty(errors)
    }
}