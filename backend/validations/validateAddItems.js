const validator = require("validator");
const isEmpty = require("./isEmpty");
const fileType = require("./fileType");

module.exports = function validateNewStore(data){

    let errors = {}

    data.idProduto = !isEmpty(data.idProduto) ? data.idProduto : "";
    data.idMercao = !isEmpty(data.idMercao) ? data.idMercao : "";
    data.nomeItem = !isEmpty(data.nomeItem) ? data.nomeItem : "";
    data.preco = !isEmpty(data.preco) ? data.preco : "";
    data.image = !isEmpty(data.image) ? data.image : "";

    if(validator.isEmpty(data.idProduto))
    {
        errors.nomeProduto = "Nome Produto is required";
    }

    if(validator.isEmpty(data.idMercado))
    {
        errors.nomeMercado = "Mercado is Required";
    }

    if(validator.isEmpty(data.nomeIten))
    {
        errors.nomeIten = "nomeItem is Required";
    }

    if(validator.isEmpty(data.preco))
    {
        errors.preco = "preco is Required";
    }

    else if(!validator.isDecimal(data.preco, {force_decimal: true, decimal_digits: '2', locale: 'en-US'}))
    {
        errors.preco = "Invalid Input";
    }

    if(validator.isEmpty(data.image))
    {
        errors.image = "Image is Required";
    }

    else if(!fileType(data.imageType))
    {
        errors.image = "Invalid Type"
    }

    return{
        errors:errors,
        isValid:isEmpty(errors)
    }
}