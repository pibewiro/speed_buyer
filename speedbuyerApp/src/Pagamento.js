import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import axios from "axios";
import jwtDecode from "jwt-decode"
import {DivItens, DivButton, DivItens2, Div, TextoE, Header, Total, TextEE, Botao, AreaBotao, Texto, DivView2, ButtonI} from "./AppStyles"




export default class Pagamento extends Component {

    constructor()
    {
        super()

        this.state = {
            qtd:[],
            total:"",
            data:new Date(),
            idUsuario:""
        }
    }

    async componentDidMount()
    {
       await AsyncStorage.getItem('jwtToken')
        .then(res=>this.setState({idUsuario:jwtDecode(res).id_usuario}))

        await axios.get(`http://arcane-savannah-75129.herokuapp.com/lojas/qtd_item/${this.props.navigation.state.params.idCompras}/${this.state.idUsuario}`)
        .then(res=>this.setState({qtd:res.data}))
        .then(()=>this.calcularPreco())
        .then(()=>console.log(this.state))
    }

    calcularPreco = () => {
        let preco = 0;
         this.state.qtd.map(res=>{
            preco += res.qtd * res.it_preco;
         })

         this.setState({total:preco.toFixed(2).toString().replace(".", ",")})

     }

     notaFiscal = (id) => {
         console.log(this.props.navigation.state.params)
         this.props.navigation.navigate("NotaFiscal", {idCompras:this.props.navigation.state.params.idCompras, idEntregador:this.props.navigation.state.params.idEntregador})
     }

    render() {
        return (
            <Div>
                <Header> Pagamento </Header>


                <Button title="Pagar" onPress={this.notaFiscal} />
            </Div>
        )
    }
}
