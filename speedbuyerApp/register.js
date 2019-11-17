import React, { Component } from 'react';
import {StyleSheet, AppRegistry, Text, View, TextInput, Button} from 'react-native'
import axios from 'axios';
import Component1 from "./Component1"

const style = StyleSheet.create({
    styleErrors:{
        color:'red'
    }
})


export default class register extends Component {

    constructor()
    {
        super()

        this.state = {
            primeiroNome:"",
            sobreNome:"",
            usuario:"",
            senha:"",
            email:"",
            errors:[]
        }
    }

    salvarUsuario = () => {

        const novoUsuario = { 
            primeiroNome:this.state.primeiroNome,
            sobreNome:this.state.sobreNome,
            usuario:this.state.usuario,
            email:this.state.email,
            senha:this.state.senha
        }

      axios.post("http://10.0.2.2:5000/user/new_user", novoUsuario)
      .then(res=>{
          console.log("inserted")
      })
      .catch(err=>this.setState({errors:err.response.data}))
    }

  render() {

    const {errors} = this.state;

    return (
      <View style={{padding:20}}>
          <TextInput placeholder="Primeiro Nome" onChangeText={(primeiroNome) => this.setState({primeiroNome})} value={this.state.primeiroNome} />
          <Text style={style.styleErrors}>{errors.primeiroNome}</Text>
          <TextInput placeholder="Sobre Nome" onChangeText={(sobreNome) => this.setState({sobreNome})} value={this.state.sobreNome} />
          <Text style={style.styleErrors}>{errors.sobreNome}</Text>
          <TextInput placeholder="Usuario" onChangeText={(usuario) => this.setState({usuario})} value={this.state.usuario} />
          <Text style={style.styleErrors}>{errors.usuario}</Text>
          <TextInput placeholder="Senha" onChangeText={(senha) => this.setState({senha})} value={this.state.senha} />
          <Text style={style.styleErrors}>{errors.senha}</Text>
          <TextInput placeholder="Email" onChangeText={(email) => this.setState({email})} value={this.state.email} />
          <Text style={style.styleErrors}>{errors.email}</Text>
          <Button title="Submit" onPress={this.salvarUsuario} />
      </View>
    );
  }
}
