import React, { Component } from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'

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
    render() {
        return (
            <View>
                {this.state.itens.map(res=>(
                    <Text>{res.it_nome}</Text>
                ))}
            </View>
        )
    }
}
