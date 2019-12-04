import {Label, ErrorText, Input, Div, Div2, Header, DivImage, Logo, Botao, AreaBotao, Texto, DivView2, Texto2, DivMer, ImageMer} from "./AppStyles"

module.exports = function merImage(nome)
{

    if(nome === "Arena")
    {
        return <ImageMer source={require("../images/Mercados/arena.jpg")} /> 
    }

    else if(nome === "Atacadão")
    {
        return <ImageMer source={require("../images/Mercados/atacadao.png")} /> 
    }

    else if(nome === "Pao de Açucar")
    {
        return <ImageMer source={require("../images/Mercados/carrefour.png")} /> 
    }

    else if(nome === "Paulistao")
    {
        return <ImageMer source={require("../images/Mercados/paulistao.jpg")} /> 
    }

    else if(nome === "Walmart")
    {
        return <ImageMer source={require("../images/Mercados/walmart.jpg")} /> 
    }

    else if(nome === "Carrefour")
    {
        return <ImageMer source={require("../images/Mercados/carrefour.png")} /> 
    }

    else if(nome === "Dalben")
    {
        return <ImageMer source={require("../images/Mercados/dalben.png")} /> 
    }

    else if(nome === "Extra")
    {
        return <ImageMer source={require("../images/Mercados/extra.jpg")} /> 
    }
}