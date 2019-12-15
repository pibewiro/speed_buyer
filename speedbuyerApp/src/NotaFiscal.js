import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import axios from "axios";
import jwtDecode from "jwt-decode"
import moment from "moment"
import {DivItens, DivButton, DivItens2, Div, TextoE, Header, Total, TextEE, Botao, AreaBotao, Texto, DivView2, ButtonI} from "./AppStyles"


export default class NotaFiscal extends Component {

    constructor()
    {
        super()

        this.state = {
            dados:[],
            nomeCliente:"",
            nomeMercado:"",
            total:"",
            rua:"",
            nomeEntregador:"",
            complemento:"",
            cep:"",
            codigoCompras:"",
            cidade:"",
            estado:""
        }
    }

    async componentDidMount()
    {
      await  AsyncStorage.getItem("jwtToken")
        .then(res=>{
            this.setState({nomeCliente:`${jwtDecode(res).primeiroNome} ${jwtDecode(res).sobreNome}`})
            jwtDecode(res).primeiro_nome
        })

       await axios.get(`http://arcane-savannah-75129.herokuapp.com/lojas/nota_fiscal/${this.props.navigation.state.params.idCompras}/${this.props.navigation.state.params.idEntregador}`)
        .then(res=>this.setState({dados:res.data}))
        .then(()=>this.setState({
            nomeEntregador:`${this.state.dados[0].primeiro_nome} ${this.state.dados[0].sobre_nome}`,
            nomeMercado:this.state.dados[0].mer_nome,
            codigoCompras:this.state.dados[0].sh_id_compras,
            rua:this.state.dados[0].en_rua,
            complemento:this.state.dados[0].en_complemento,
            cep:this.state.dados[0].en_cep,
            cidade:this.state.dados[0].en_cidade,
            estado:this.state.dados[0].en_estado,
            numero:this.state.dados[0].en_numero,
            data:this.state.dados[0].sh_data,
        }))
        .then(()=>this.calcularPreco())
        .then(()=>console.log(this.state))
    }

    calcularPreco = () => {
        let preco = 0;
         this.state.dados.map(res=>{
            preco += res.qtd * res.sh_preco;
             this.setState({total:preco.toFixed(2)})
        })
    }

    menu = () => {
        this.props.navigation.navigate("Menu")
    }
    render() {
        return (
            <Div>
                <Header>Nota Fiscal</Header>
            <View>

                <Text>Cliente: {this.state.nomeCliente}</Text>
                {this.state.dados.map(res=>(
                    <>
                    <View>
                        <Text>Item: {res.it_nome}</Text>
                        <View>
                            <Text>Quantidade:  {res.qtd}</Text>
                            <Text>Preco:  R${res.sh_preco.toFixed(2).toString().replace(".", ",")}</Text>
                        </View>
                    </View>
                    </>
                ))}
                
                <Text>Total: R${this.state.total.toString().replace(".", ",")}</Text>

                <View>
                    <Text>Supermercado:{this.state.nomeMercado}</Text>
                    <Text>{this.state.rua}, {this.state.numero}</Text>
                    <Text>{this.state.cep}</Text>
                </View>

                <View>
                    <Text>Entregador: {this.state.nomeEntregador}</Text>
                    <Text>Codigo de Compras: {this.state.codigoCompras}</Text>
                    <Text>Data de Compra: {moment(this.state.data).format('DD-MM-YYYY HH:MM')}</Text>
                </View>
                <Button title="Voltar Ao Menu" onPress={this.menu} />
            </View>                
        </Div>
        )
    }
}
