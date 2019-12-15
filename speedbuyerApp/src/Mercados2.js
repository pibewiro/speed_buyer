import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import axios from "axios"
import {Label, ErrorText, TextoMer2, Div, DivMerList, Header, DivImage, Logo, BotaoMer, AreaBotao, TextoMer, DivView2, Texto3, DivMer, ImageMer} from "./AppStyles"
import uuid from "uuid"

export default class Mercados2 extends Component {

    constructor()
    {
        super()

        this.state = {
            mercados:[]
        }
    }

    componentDidMount()
    {
        axios.get(`http://arcane-savannah-75129.herokuapp.com/lojas/get_stores_brand/${this.props.navigation.state.params.url}`)
        .then(res=>this.setState({mercados:res.data}))
        .then(()=>console.log(this.state))
    }

    categoria = (idMercado, idCompras) => {
        console.log(idCompras)
        this.props.navigation.navigate("Categorias2", {idMercado, idCompras})
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
       }
        return (
            <ScrollView>
                {this.state.mercados.map(res=>{

                    return <BotaoMer onPress={this.categoria.bind(this, res.mer_id_mercado, uuid())}>
                        <DivMer>
                        {merImage(res.mer_nome)}
                        <DivMerList>
                            <TextoMer2>{res.mer_nome}</TextoMer2>
                            <Texto3>{res.en_rua} {res.en_numero}</Texto3>
                            <Texto3>{res.en_cidade}, SP</Texto3>
                            {res.en_complemento === "" ? null : <Texto3>{res.en_complemento}</Texto3>}
                            <Texto3>{res.en_cep}</Texto3>
                            </DivMerList>
                        </DivMer>
                    </BotaoMer>
    }           )}
            </ScrollView>
        )
    }
}
