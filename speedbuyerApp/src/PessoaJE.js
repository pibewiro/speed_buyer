import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class PessoaJE extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount()
  {
    console.log(this.props.navigation.getParam('id'))
  }

  render() {
    return (
      <View>
        <Text> PessoaJE </Text>
      </View>
    );
  }
}
