import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import axios from "axios";
import {DivItens, DivButton, DivItens2, Div, TextoE, Header, Total, TextEE, Botao, AreaBotao, Texto, DivView2, ButtonI} from "./AppStyles"


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
            <Div>
                <Header>Entregador</Header>
                {this.state.entregador.map(res=>(
                    <>
                    <TextEE>{res.primeiro_nome} {res.sobre_nome}</TextEE>
                    <AreaBotao>
                        <Botao onPress={this.escolha.bind(this, res.ent_id)} activeOpacity={0.8} > 
                            <TextoE>Escolhe</TextoE>
                        </Botao>
                    </AreaBotao>
                    </>
                ))}
            </Div>
        )
    }
}
