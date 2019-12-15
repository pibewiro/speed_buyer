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

    pagamento = () => {
        this.props.navigation.navigate("Pagamento")
    }


    render() {
        return (
            <View>
                {this.state.entregador.map(res=>(
                    <>
                    <Text>{res.primeiro_nome} {res.sobre_nome}</Text>
                    <Button title="Escolhe" onPress={this.pagamento} />
                    </>
                ))}
            </View>
        )
    }
}
