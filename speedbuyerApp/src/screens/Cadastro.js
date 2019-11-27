import React, { Component } from 'react';
import {StyleSheet, AppRegistry, Text, View, TextInput, Button, AsyncStorage} from 'react-native'
import axios from 'axios';
import {Div, Input, Header, DivImage, Logo, Botao, AreaBotao, Texto, ErrorText, Div2} from "./AppStyles"


const style = StyleSheet.create({
    divView:{
        padding:20
    }
})


export default class Cadastro extends Component {

    constructor()
    {
        super()

        this.state = {
            primeiroNome:"",
            sobreNome:"",
            usuario:"",
            senha:"",
            email:"",
            errors:[]
        }
    }

    componentDidMount()
    {
      console.log()
    }

    salvarUsuario = () => {

        const novoUsuario = { 
            primeiroNome:this.state.primeiroNome,
            sobreNome:this.state.sobreNome,
            usuario:this.state.usuario,
            email:this.state.email,
            senha:this.state.senha
        }

      axios.post("http://arcane-savannah-75129.herokuapp.com/user/new_user", novoUsuario)
      .then(res=>{
          this.props.navigation.navigate('Login')
      })
      .catch(err=>this.setState({errors:err.response.data}))
    }

  render() {

    const {errors} = this.state;

    return (
      <View style={style.divView}>
        <Header>Cadastrar</Header>
        <Div2>
          <Input placeholder="Primeiro Nome" onChangeText={(primeiroNome) => this.setState({primeiroNome})} value={this.state.primeiroNome} />
          <ErrorText>{errors.primeiroNome}</ErrorText>
        </Div2>
        <Div2>
          <Input placeholder="Sobre Nome" onChangeText={(sobreNome) => this.setState({sobreNome})} value={this.state.sobreNome} />
          <ErrorText>{errors.sobreNome}</ErrorText>
        </Div2>

        <Div2>
          <Input placeholder="Usuario" onChangeText={(usuario) => this.setState({usuario})} value={this.state.usuario} />
          <ErrorText>{errors.usuario}</ErrorText>
        </Div2>
          
        <Div2>
          <Input placeholder="Senha" onChangeText={(senha) => this.setState({senha})} value={this.state.senha} />
          <ErrorText>{errors.senha}</ErrorText>
        </Div2>
        
        <Div2>
          <Input placeholder="Email" onChangeText={(email) => this.setState({email})} value={this.state.email} />
          <ErrorText>{errors.email}</ErrorText>
        </Div2>

        <AreaBotao>
          <Botao onPress={this.salvarUsuario} activeOpacity={0.8} > 
              <Texto>Cadastrar</Texto>
          </Botao>
        </AreaBotao>
      </View>
    );
  }
}
