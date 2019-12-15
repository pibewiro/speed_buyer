import React, { Component } from 'react'
import { Text, View } from 'react-native'
import axios from "axios";
import {BotaoC, DivC, TextoC, Div, Div2, Header, DivImage, Logo, Botao, AreaBotao, Texto, DivView2, Texto2, DivMer, ImageMer} from "./AppStyles"
import { ScrollView } from 'react-native-gesture-handler';

export default class Categorias extends Component {

    constructor()
    {
        super()

        this.state = {
            categorias:[],
            idMercado:"",
            idCompras:""
        }
    }

    componentDidMount()
    {

        axios.get(`http://arcane-savannah-75129.herokuapp.com/lojas/get_categorias`)
        .then(res=>this.setState({categorias:res.data}))
        .then(()=>this.setState({
            idMercado:this.props.navigation.state.params.idMercado,
            idCompras:this.props.navigation.state.params.idCompras
        }))
        .then(()=>console.log(this.state))
    }

    comprar = (categoria) => {
        console.log("To Itens:", this.state.idMercado, categoria, this.state.idCompras)

       this.props.navigation.navigate("Itens", {idMercado:this.state.idMercado, categoria, idCompras:this.state.idCompras})

    }
    render() {

        return (
            <ScrollView>
                <Header>Categorias</Header>
                {this.state.categorias.map(res=>(
                <BotaoC onPress={this.comprar.bind(this, res.cat_nome)}>
                   <DivC>
                       <TextoC>{res.cat_nome}</TextoC>
                   </DivC>
               </BotaoC>
                ))}
            </ScrollView>
        )
    }
}
