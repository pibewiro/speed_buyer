import React, { Component } from 'react';
import { View, Text } from 'react-native';
import jwtDecode from 'jwt-decode';
import axios from "axios"
import AsyncStorage from '@react-native-community/async-storage';
import {Div, Input, Header, DivImage, Logo, Botao, AreaBotao, Texto, ErrorText, Div2, DivView2} from "./AppStyles"

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount()
  {

  }

  render() {
    return (
      <DivView2>
        <Header>Create Profile</Header>

        <AreaBotao>
          <Botao onPress={this.clickProfile} activeOpacity={0.8} > 
              <Texto>Pessoa Juridico</Texto>
          </Botao>
        </AreaBotao>

        <AreaBotao>
          <Botao onPress={this.clickProfile} activeOpacity={0.8} > 
              <Texto>Pessoa Fisico</Texto>
          </Botao>
        </AreaBotao>

        <AreaBotao>
          <Botao onPress={this.clickProfile} activeOpacity={0.8} > 
              <Texto>Entregador</Texto>
          </Botao>
        </AreaBotao>
      </DivView2>
    );
  }
}
