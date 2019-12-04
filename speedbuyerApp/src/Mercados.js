import React, { Component } from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import axios from "axios"
import styled from 'styled-components/native';
import {Label, ErrorText, Input, Div, Div2, Header, DivImage, Logo, Botao, AreaBotao, Texto, DivView2, Texto2, DivMer, ImageMer} from "./AppStyles"

const ToggleArea = styled.TouchableHighlight`
width:50px;
height:50px ;
`;

const ImageMenu = styled.Image`
width:50px;
height:50px ;
`;




export default class Mercados extends Component {

    constructor()
    {
        super()
        this.state = {
            mercados:[]
        }
    }

    componentDidMount()
    {
        axios.get("http://arcane-savannah-75129.herokuapp.com/lojas/get_mercados")
        .then(res=>{
            this.setState({mercados:res.data})
        })
        .then(()=>console.log(this.state))
    }

    mercado = (url, idMercado) => {
        this.props.navigation.navigate("Mercados2", {url, idMercado})
    }
    
    render() {

       function merImage(nome)
       {
           if(nome === "Arena")
           {
               return <ImageMer source={require("./images/Mercados/arena.jpg")} /> 
           }

           else if(nome === "Atacadão")
           {
               return <ImageMer source={require("./images/Mercados/atacadao.png")} /> 
           }

           else if(nome === "Pao de Açucar")
           {
               return <ImageMer source={require("./images/Mercados/carrefour.png")} /> 
           }

           else if(nome === "Paulistao")
           {
               return <ImageMer source={require("./images/Mercados/paulistao.jpg")} /> 
           }

           else if(nome === "Walmart")
           {
               return <ImageMer source={require("./images/Mercados/walmart.jpg")} /> 
           }

           else if(nome === "Carrefour")
           {
               return <ImageMer source={require("./images/Mercados/carrefour.png")} /> 
           }

           else if(nome === "Dalben")
           {
               return <ImageMer source={require("./images/Mercados/dalben.png")} /> 
           }

           else if(nome === "Extra")
           {
               return <ImageMer source={require("./images/Mercados/extra.jpg")} /> 
           }

           else if(nome === "Pague Menos")
           {
               return <ImageMer source={require("./images/Mercados/paguemenos.png")} /> 
           }
       }
        return (
            <ScrollView>
                {this.state.mercados.map(res=>{

                    return <Botao onPress={this.mercado.bind(this, res.mer_url, res.mer_id_mercado)}>
                        <DivMer>
                        {merImage(res.mer_nome)}
                            <Header>{res.mer_nome}</Header>
                        </DivMer>
                    </Botao>
    }           )}
            </ScrollView>
        )
    }
}
