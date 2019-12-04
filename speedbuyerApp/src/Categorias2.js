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
            idMercado:""
        }
    }

    componentDidMount()
    {

        axios.get(`http://arcane-savannah-75129.herokuapp.com/lojas/get_categorias`)
        .then(res=>this.setState({categorias:res.data}))
        .then(()=>this.setState({idMercado:this.props.navigation.state.params.idMercado}))
    }

    comprar = (categoria) => {
        console.log(this.state.idMercado, categoria)

       this.props.navigation.navigate("Itens", {idMercado:this.state.idMercado, categoria})

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
