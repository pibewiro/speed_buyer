import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from "axios";
import {Div, Input, Header, DivImage, Logo, Botao, AreaBotao, Texto, ErrorText, Div2} from "./AppStyles";

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
    .then(res=>console.log(this.state.mercados))
}

  render() {
      let i = 0
    return (
      <View>
        {this.state.mercados.map(res=>{
          return(
            <>
              <Text key={i++}>{res.mer_nome}</Text>
              </>
          )
        })}
      </View>
    );
  }
}
