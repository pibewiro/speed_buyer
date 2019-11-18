import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

  pressme = () => {
      this.props.navigation.navigate("Login")
  }

  render() {
    return (
      <View>
        <Text style={this.styles.boxes}> Menu </Text>
        <Text style={this.styles.boxes} onPress={this.pressme}> Meu Profile </Text>
        <Text style={this.styles.boxes}> Mercados </Text>
        <Text style={this.styles.boxes}> Minha Lista </Text>
        <Text style={this.styles.boxes}> Meu Carrinho </Text>
        <Text style={this.styles.boxes}> Promoçoes </Text>
        <Text style={this.styles.boxes}> Favoritos </Text>
        <Text style={this.styles.boxes}> Ajuda Central </Text>
      </View>
    );
  }
}
