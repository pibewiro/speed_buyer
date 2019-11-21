import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import jwtDecode from "jwt-decode"
import styled from 'styled-components/native';
import {Div, Input, Header, DivImage, Logo, Botao, AreaBotao, Texto, ErrorText, Div2, DivView2} from "./AppStyles"



export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  clickProfile = () => {
      AsyncStorage.getItem('jwtToken')
      .then(res=>{
        const ativo = jwtDecode(res).ativo
        
        if(ativo === 1) this.props.navigation.navigate('PessoaF')
        if(ativo === 2) this.props.navigation.navigate('PessoaJ')      
      })
  }

  clickMercados = () => {
    this.props.navigation.navigate("Mercados")
  }

  render() {
    return (
      <DivView2>
        <Header> Menu </Header>
        <AreaBotao>
          <Botao onPress={this.clickProfile} activeOpacity={0.8} > 
              <Texto>Meu Profle</Texto>
          </Botao>
        </AreaBotao>

        <AreaBotao>
          <Botao onPress={this.clickMercados} activeOpacity={0.8} > 
              <Texto>Mercados</Texto>
          </Botao>
        </AreaBotao>

        <AreaBotao>
          <Botao activeOpacity={0.8} > 
              <Texto>Minha Lista</Texto>
          </Botao>
        </AreaBotao>

        <AreaBotao>
          <Botao activeOpacity={0.8} > 
              <Texto>Meu Carrinho</Texto>
          </Botao>
        </AreaBotao>

        <AreaBotao>
          <Botao activeOpacity={0.8} > 
              <Texto>Promoções</Texto>
          </Botao>
        </AreaBotao>

        <AreaBotao>
          <Botao onPress={this.clickMercados} activeOpacity={0.8} > 
              <Texto>Favoritos</Texto>
          </Botao>
        </AreaBotao>

        <AreaBotao>
          <Botao onPress={this.clickMercados} activeOpacity={0.8} > 
              <Texto>Ajuda Central</Texto>
          </Botao>
        </AreaBotao>

        <AreaBotao>
          <Botao onPress={this.clickMercados} activeOpacity={0.8} > 
              <Texto>Log Out</Texto>
          </Botao>
        </AreaBotao>
      </DivView2>
    );
  }
}
