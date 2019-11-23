import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const style = StyleSheet.create({
    styleView:{
        padding:20,
    }
})

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
      <View style={style.styleView}>
        <Text>SpeedBuyer</Text>
        <Button title="Login" onPress={this.signin} />
        <Button title="Cadastrar-se" onPress={this.signup} />
      </View>
    );
  }
}
