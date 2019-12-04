import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import axios from 'axios'
import {Label, ErrorText, Input, Div, Div2, Header, DivImage, Logo, Botao, AreaBotao, Texto, DivView2, Texto2} from "./AppStyles"

export default class Itens extends Component {

    constructor()
    {
        super()

        this.state = {
            itens:[]
        }
    }

    componentDidMount()
    {
        console.log(this.props.navigation.state.params);
            const items = {
                categoria:this.props.navigation.state.params.categoria,
                idMercado:this.props.navigation.state.params.idMercado
            }

        axios.post(`http://arcane-savannah-75129.herokuapp.com/lojas/get_items`, items)
        .then(res=>this.setState({itens:res.data}))
        .then(()=>console.log(this.state))
    }

    comprar = () => {
        this.props.navigation.navigate("EscolhaEntregador")
    }
    render() {
        return (
            <View>
                {this.state.itens.map(res=>(
                    <>
                    <Text>{res.it_nome}</Text>
                    <Button title="Comprar" onPress= {this.comprar} />
                    </>
                ))}
            </View>
        )
    }
}
