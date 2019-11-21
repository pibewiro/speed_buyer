import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from "axios";

export default class Mercados extends Component {
  constructor(props) {
    super(props);
    this.state = {
        mercados:[]
    };
  }

  componentDidMount()
  {
    axios.get("http://arcane-savannah-75129.herokuapp.com/lojas/get_mercados")
    .then(res=>this.setState({mercados:res.data}))
}

  render() {
      let i = 0
    return (
      <View>
        {this.state.mercados.map(res=>(
            <Text key={i++}>{res.mer_nome}</Text>
        ))}
      </View>
    );
  }
}
