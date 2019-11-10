const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateNewStore(data){

    let errors = {}

    data.nomeProduto = !isEmpty(data.nomeProduto) ? data.nomeProduto : "";
    data.idCategoria = !isEmpty(data.idCategoria) ? data.idCategoria : "";

    if(validator.isEmpty(data.nomeProduto))
    {
        errors.nomeProduto = "Nome Produto is required";
    }

    if(validator.isEmpty(data.idCategoria))
    {
        errors.idCategoria = "Categoria is required";
    }

    return{
        errors:errors,
        isValid:isEmpty(errors)
    }
}