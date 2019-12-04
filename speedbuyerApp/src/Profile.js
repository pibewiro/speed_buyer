import React, { Component } from 'react';
import { View, Text } from 'react-native';
import jwtDecode from 'jwt-decode';
import {Div, Input, Header, DivImage, Logo, Botao, AreaBotao, Texto, ErrorText, Div2} from "./AppStyles";

import axios from "axios"
import AsyncStorage from '@react-native-community/async-storage';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handlePF = () => this.props.navigation.navigate("PessoaF")
  handlePJ = () => this.props.navigation.navigate("PessoaJ")
  handleEnt = () => this.props.navigation.navigate("Entregador")

  render() {
    return (
      <Div>
        <Header>Create Profile</Header>

        <AreaBotao>
          <Botao>
            <Texto onPress={this.handlePF}>Pessoa Fisica</Texto>
          </Botao>
        </AreaBotao>

        <AreaBotao>
          <Botao>
            <Texto onPress={this.handlePJ}>Pessoa Juridico</Texto>
          </Botao>
        </AreaBotao>

        <AreaBotao>
          <Botao>
            <Texto onPress={this.handleEnt}>Entregador</Texto>
          </Botao>
        </AreaBotao>
      </Div>
    );
  }
}
