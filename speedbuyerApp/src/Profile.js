import React, { Component } from 'react';
import { View, Text } from 'react-native';
import jwtDecode from 'jwt-decode';

import axios from "axios"
import AsyncStorage from '@react-native-community/async-storage';

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
      <View>
        <Text>Create Profile</Text>
        <Text>Pessoa Fisica</Text>
        <Text>Pessoa Juridico</Text>
        <Text>Entregador</Text>
      </View>
    );
  }
}
