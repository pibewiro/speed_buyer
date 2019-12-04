import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import jwtDecode from 'jwt-decode';
import {Div, Input, Header, DivImage, Logo, Botao, AreaBotao, Texto, ErrorText, Div2, Scroll} from "./AppStyles";
import axios from "axios"
import AsyncStorage from '@react-native-community/async-storage';

export default class PessoaJ extends Component {

  constructor()
  {
      super()

      this.state = {
          cnpj:"",
          nomeFantasia:"",
          razaosocial:"",
          inscricaoMun:"",
          inscricaoEst:"",
          razaosocial:"",
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

  handlePF = () => {

    const newPessoa = {
      cnpj:this.state.cnpj,
      nomeFantasia:this.state.nomeFantasia,
      razaosocial:this.state.razaosocial,
      inscricaoMun:this.state.inscricaoMun,
      inscricaoEst:this.state.inscricaoEst,
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
    axios.post("http://arcane-savannah-75129.herokuapp.com/profile/post_pessoa_juridica", newPessoa)
    .then(res=>{
      alert("Novo Pessoa Fisica Cadastrado com Successo")
      this.props.navigation.push("HomeDrower")
    })
    .catch(err=>this.setState({errors:err.response.data}))
  }

  render() {

    const {errors} = this.state;

    return (
      <Scroll>
      <ScrollView>
        <Header>Pessoa Juridico</Header>
        <Div2>
          <Input placeholder="CNPJ" onChangeText={(cnpj) => this.setState({cnpj})} value={this.state.cnpj} />
          <ErrorText>{errors.cnpj}</ErrorText>
        </Div2>

        <Div2>
          <Input placeholder="Nome Fantasia" onChangeText={(nomeFantasia) => this.setState({nomeFantasia})} value={this.state.nomeFantasia} />
          <ErrorText>{errors.nomeFantasia}</ErrorText>
        </Div2>

        <Div2>
          <Input placeholder="Razão Social" onChangeText={(razaosocial) => this.setState({razaosocial})} value={this.state.razaosocial} />
          <ErrorText>{errors.razaoSocial}</ErrorText>
        </Div2>

        <Div2>
          <Input placeholder="Inscrição Municipal" onChangeText={(inscricaoMun) => this.setState({inscricaoMun})} value={this.state.inscricaoMun} />
          <ErrorText>{errors.inscricaoMun}</ErrorText>
        </Div2>
        
        <Div2>
          <Input placeholder="Inscrição Estadual" onChangeText={(inscricaoEst) => this.setState({inscricaoEst})} value={this.state.inscricaoEst} />
          <ErrorText>{errors.inscricaoEst}</ErrorText>
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
          <Botao onPress={this.handlePF} activeOpacity={0.8} > 
              <Texto>Cadastrar</Texto>
          </Botao>
        </AreaBotao>
      </ScrollView>
      </Scroll>
    );
  }
}
