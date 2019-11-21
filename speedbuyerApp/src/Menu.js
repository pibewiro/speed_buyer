import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import jwtDecode from "jwt-decode"
import styled from 'styled-components/native';

const Texto = styled.Text`
    font-size:38px;
    color:#000;
    font-weight:bold;
    text-align:center;
    padding:20px;

`;

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  styles = StyleSheet.create({
      boxes:{
          backgroundColor:'blue',
          textAlign:'center',
          padding:8,
          fontSize:25, 
      }
  })

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
      <View>
        <Texto> Menu </Texto>
        <Text style={this.styles.boxes} onPress={this.clickProfile}> Meu Profile </Text>
        <Text style={this.styles.boxes} onPress={this.clickMercados}> Mercados </Text>
        <Text style={this.styles.boxes}> Minha Lista </Text>
        <Text style={this.styles.boxes}> Meu Carrinho </Text>
        <Text style={this.styles.boxes}> Promoçoes </Text>
        <Text style={this.styles.boxes}> Favoritos </Text>
        <Text style={this.styles.boxes}> Ajuda Central </Text>
      </View>
    );
  }
}
