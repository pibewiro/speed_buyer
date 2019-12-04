import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import axios from "axios";

export default class EscolhaEntregador extends Component {

    constructor()
    {
        super()

        this.state = {
            entregador:[]
        }
    }

    componentDidMount()
    {
        axios.get('http://arcane-savannah-75129.herokuapp.com/lojas/get_entregadores')
        .then(res=>this.setState({entregador:res.data}))
    }

    escolha = (id) => {
        console.log(id, this.props.navigation.state.params.idCompras)
       this.props.navigation.navigate("Pagamento", {idCompras:this.props.navigation.state.params.idCompras, idEntregador:id})
    }


    render() {
        return (
            <View>
                {this.state.entregador.map(res=>(
                    <>
                    <Text>{res.primeiro_nome} {res.sobre_nome}</Text>
                    <Button title="Escolhe" onPress={this.escolha.bind(this, res.ent_id)} />
                    </>
                ))}
            </View>
        )
    }
}
