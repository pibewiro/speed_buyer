import React, { Component } from 'react'
import { Text, View, Button, ScrollView } from 'react-native'
import axios from 'axios'
import {DivItens, DivButton, DivItens2, Div, TextI, Header, Total, Logo, Botao, AreaBotao, Texto, DivView2, ButtonI} from "./AppStyles"
import AsyncStorage from '@react-native-community/async-storage';
import jwtDecode from "jwt-decode"

export default class Itens extends Component {

    constructor()
    {
        super()

        this.state = {
            itens:[],
            total:0,
            categoria:"",
            idUsuario:"",
            qtd:[]
        }
    }

    async componentDidMount()
    {
        console.log(this.props.navigation.state.params);
            const items = {
                categoria:this.props.navigation.state.params.categoria,
                idMercado:this.props.navigation.state.params.idMercado
            }

            
         await AsyncStorage.getItem('jwtToken')
          .then(res=>this.setState({idUsuario:jwtDecode(res).id_usuario}))

        await axios.post(`http://arcane-savannah-75129.herokuapp.com/lojas/get_items`, items)
        .then(res=>this.setState({itens:res.data}))
        .then(()=>console.log(this.state))

        await axios.get(`http://arcane-savannah-75129.herokuapp.com/lojas/qtd_item/${this.props.navigation.state.params.idCompras}/${this.state.idUsuario}`)
        .then(res=>this.setState({qtd:res.data}))
        .then(()=>this.calcularPreco())


    }

    addCart = async(id, nome, preco) => {
        console.log(id, nome, preco, this.props.navigation.state.params.idCompras, this.state.idUsuario)

        const cart ={
            idUsuario:this.state.idUsuario,
            idItem:id,
            idComprar:this.props.navigation.state.params.idCompras,
            preco:preco
        }

        console.log(cart)

      await  axios.post("http://arcane-savannah-75129.herokuapp.com/lojas/add_cart", cart)
              .then(res=>this.setState({qtd:res.data}))
        await this.calcularPreco();

    }

    delCart = async(id, nome, preco) => {
        console.log(id, nome, preco, this.props.navigation.state.params.idCompras, this.state.idUsuario)

        const cart ={
            idUsuario:this.state.idUsuario,
            idItem:id,
            idComprar:this.props.navigation.state.params.idCompras,
        }

        console.log(cart)

      await  axios.post("http://arcane-savannah-75129.herokuapp.com/lojas/del_cart", cart)
              .then(res=>this.setState({qtd:res.data}))

        await  axios.get(`http://arcane-savannah-75129.herokuapp.com/lojas/qtd_item/${this.props.navigation.state.params.idCompras}/${this.state.idUsuario}`, cart)
        .then(res=>this.setState({qtd:res.data}))
        
        await this.calcularPreco();
    }

    checkout = () => {
        console.log(this.props.navigation.state.params.idCompras)
       this.props.navigation.navigate("EscolhaEntregador", {idCompras:this.props.navigation.state.params.idCompras})
    }

    calcularPreco = () => {
        let preco = 0;
         this.state.qtd.map(res=>{
            preco += res.qtd * res.it_preco;
         })

         this.setState({total:preco.toFixed(2).toString().replace(".", ",")})

     }

    render() {
        return (
            <ScrollView>
            <DivItens>
                <Header>Itens</Header>
                <Total>Total:{this.state.total}</Total>
                {this.state.itens.map(res=>(
                    <DivItens2>
                    <TextI>{res.it_nome}</TextI>
                    <TextI>R${res.it_preco.toFixed(2).toString().replace(".", ",")}</TextI>
                    <DivButton>
                        <ButtonI title="+" onPress={this.addCart.bind(this, res.item_id, res.it_nome, res.it_preco)} />
                        <ButtonI title="-" onPress={this.delCart.bind(this, res.item_id, res.it_nome, res.it_preco)} />
                    </DivButton>
                    </DivItens2>
                ))}
                <AreaBotao>
            <Botao onPress={this.checkout} activeOpacity={0.8} > 
                <Texto>Checkout</Texto>
            </Botao>
        </AreaBotao>
            </DivItens>
            </ScrollView>

        )
    }
}
