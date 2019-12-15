import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import jwtDecode from 'jwt-decode';
import {Div, Input, Header, DivImage, Logo, Botao, AreaBotao, Texto, ErrorText, Div2, Scroll} from "./AppStyles";
import axios from "axios"
import AsyncStorage from '@react-native-community/async-storage';

export default class Entregador extends Component {

  constructor()
  {
      super()

      this.state = {
          cpf:"",
          senha:"",
          rua:"",
          numero:"",
          complemento:"",
          cep:"",
          cidade:"",
          estado:"São Paulo",
          dataNascimento:"",
          idUsuario:"",
          errors:[]
      }
  }

  componentDidMount()
  {
    AsyncStorage.getItem("jwtToken")
    .then(res=>this.setState({idUsuario:jwtDecode(res).id_usuario}))
  }

  handleEntregador = () => {

    const newEntregador = {
      cpf:this.state.cpf,
      rua:this.state.rua,
      numero:this.state.numero,
      complemento:this.state.complemento,
      cep:this.state.cep,
      cidade:this.state.cidade,
      estado:this.state.estado,
      dataNascimento:this.state.dataNascimento,
      idUsuario:this.state.idUsuario
  }

    console.log(this.state)
    axios.post("http://arcane-savannah-75129.herokuapp.com/profile/post_entregador", newEntregador)
    .then(res=>{
      alert("Novo Entregador Cadastrado com Successo")
      this.props.navigation.push("HomeDrower")
    })
    .catch(err=>this.setState({errors:err.response.data}))
  }

  render() {

    const {errors} = this.state;

    return (
      <Scroll>
      <ScrollView>
        <Header>Entregador</Header>
        <Div2>
          <Input placeholder="CPF" onChangeText={(cpf) => this.setState({cpf})} value={this.state.cpf} />
          <ErrorText>{errors.cpf}</ErrorText>
        </Div2>

        <Div2>
          <Input placeholder="Data Nascimento" onChangeText={(dataNascimento) => this.setState({dataNascimento})} value={this.state.dataNascimento} />
          <ErrorText>{errors.dataNascimento}</ErrorText>
        </Div2>
        
        <Div2>
          <Input placeholder="Rua" onChangeText={(rua) => this.setState({rua})} value={this.state.rua} />
          <ErrorText>{errors.rua}</ErrorText>
        </Div2>
        <Div2>
          <Input placeholder="Numero" onChangeText={(numero) => this.setState({numero})} value={this.state.numero} />
          <ErrorText>{errors.numero}</ErrorText>
        </Div2>

        <Div2>
          <Input placeholder="Complemento" onChangeText={(complemento) => this.setState({complemento})} value={this.state.complemento} />
          <ErrorText>{errors.complemento}</ErrorText>
        </Div2>
          
        <Div2>
          <Input placeholder="CEP" onChangeText={(cep) => this.setState({cep})} value={this.state.cep} />
          <ErrorText>{errors.cep}</ErrorText>
        </Div2>
        
        <Div2>
          <Input placeholder="Cidade" onChangeText={(cidade) => this.setState({cidade})} value={this.state.cidade} />
          <ErrorText>{errors.cidade}</ErrorText>
        </Div2>

        <Div2>
          <Input placeholder="Estado" value={this.state.estado} />
        </Div2>


        <AreaBotao>
          <Botao onPress={this.handleEntregador} activeOpacity={0.8} > 
              <Texto>Cadastrar</Texto>
          </Botao>
        </AreaBotao>
      </ScrollView>
      </Scroll>
    );
  }
}
