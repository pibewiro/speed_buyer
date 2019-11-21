import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import kart from "./logo.jpg"
import {Div, Div2, Header, DivImage, Logo, Botao, AreaBotao, Texto} from "./AppStyles"

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  signin = () => this.props.navigation.navigate('Login')
  signup = () => this.props.navigation.navigate('Register')

  render() {
    return (
      <Div>
        <Header>SpeedBuyer</Header>
        <DivImage>
            <Logo source={kart} />
        </DivImage>
        <AreaBotao>
            <Botao onPress={this.signin} activeOpacity={0.8} > 
                <Texto>Logar</Texto>
            </Botao>
        </AreaBotao>

        <AreaBotao>
            <Botao onPress={this.signup} activeOpacity={0.8} > 
                <Texto>Cadastrar-se</Texto>
            </Botao>
        </AreaBotao>
      </Div>
    );
  }
}
