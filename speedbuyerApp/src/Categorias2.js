import React, { Component } from 'react'
import { Text, View } from 'react-native'
import axios from "axios";
import {Label, ErrorText, Input, Div, Div2, Header, DivImage, Logo, Botao, AreaBotao, Texto, DivView2, Texto2, DivMer, ImageMer} from "./AppStyles"
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
                {this.state.categorias.map(res=>(
                   <Botao onPress={this.comprar.bind(this, res.cat_nome)}>
                   <DivMer>
                       <Header>{res.cat_nome}</Header>
                   </DivMer>
               </Botao>
                ))}
            </ScrollView>
        )
    }
}
