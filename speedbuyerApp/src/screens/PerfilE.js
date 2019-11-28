import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from "axios"
import jwtDecode from "jwt-decode"
import AsyncStorage from '@react-native-community/async-storage';
import {Label, Div, Div2, Header, DivImage, Logo, Botao, AreaBotao, Texto, DivView2, Texto2} from "./AppStyles"
import moment from "moment"

export default class PerfilE extends Component {

  constructor()
  {
      super()

      this.state = {
          primeiroNome:"",
          sobrenome:"",
          cpf:"",
          dataNascimento:"",
          email:"",
          senha:"",
          rua:"",
          numero:"",
          complemento:"",
          cep:"",
          cidade:"",
          estado:"São Paulo",
          dataNascimento:"",
          idUsuario: "",
          errors:[]
      }
  }

    componentDidMount()
    {
      AsyncStorage.getItem('jwtToken').then(res=>{
        this.setState({idUsuario:jwtDecode(res).id_usuario})
      })
      .then(res=>{
        axios.get(`http://arcane-savannah-75129.herokuapp.com/profile/get_entregador/${this.state.idUsuario}`)
        .then(res=>{
          console.log(res.data)
            this.setState({
                primeiroNome:res.data.primeiro_nome,
                sobreNome:res.data.sobre_nome,
                dataNascimento:res.data.uf_data_nascimento,
                cpf:res.data.ent_cpf,
                rua:res.data.en_rua,
                numero:res.data.en_numero,
                complemento:res.data.en_complemento,
                cep:res.data.en_cep,
                cidade:res.data.en_cidade,
                estado:res.data.en_estado,
                email:res.data.usu_email,
                nomeUsuario:res.data.nome_usuario,
            })
        })
      })
    }

    edit = e => {
      this.props.navigation.navigate("PessoaEE", {id:e})
    }

  render() {
    return (
      <DivView2>
        <ScrollView>
        <Header>Entregador</Header>
        <Div2>
          <Label>Primeiro Nome:</Label>
          <Texto2>{this.state.primeiroNome}</Texto2>
        </Div2>

        <Div2>
          <Label>Sobre Nome:</Label>
          <Texto2>{this.state.sobreNome}</Texto2>
        </Div2>

        <Div2>
          <Label>Data Nascimento:</Label>
          <Texto2>{moment(this.state.dataNascimento).format("DD-MM-YYYY")}</Texto2>
        </Div2>

        <Div2>
          <Label>CPF:</Label>
          <Texto2>{this.state.cpf}</Texto2>
        </Div2>

        <Div2>
          <Label>Email:</Label>
          <Texto2>{this.state.email}</Texto2>
        </Div2>

        <Div2>
          <Label>Usuario:</Label>
          <Texto2>{this.state.nomeUsuario}</Texto2>
        </Div2>

        <Div2>
          <Label>Rua:</Label>
          <Texto2>{this.state.rua}</Texto2>
        </Div2>

        <Div2>
          <Label>Numero:</Label>
          <Texto2>{this.state.numero}</Texto2>
        </Div2>

        <Div2>
          <Label>Complemento:</Label>
          <Texto2>{this.state.complemento}</Texto2>
        </Div2>

        <Div2>
          <Label>CEP:</Label>
          <Texto2>{this.state.cep}</Texto2>
        </Div2>

        <Div2>
          <Label>Cidade:</Label>
          <Texto2>{this.state.cidade}</Texto2>
        </Div2>

        <Div2>
          <Label>Estado:</Label>
          <Texto2>{this.state.estado}</Texto2>
        </Div2>
        
        <AreaBotao>
            <Botao onPress={this.edit.bind(this, this.state.idUsuario)} activeOpacity={0.8} > 
                <Texto>Edit</Texto>
            </Botao>
        </AreaBotao>
        </ScrollView>
      </DivView2>
    );
  }
}
