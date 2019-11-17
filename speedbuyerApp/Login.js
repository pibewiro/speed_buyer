import React, { Component } from 'react';
import {StyleSheet, AppRegistry, Text, View, TextInput, Button} from 'react-native'
import axios from 'axios';
import Component1 from "./Component1"

const style = StyleSheet.create({
    styleErrors:{
        color:'red'
    }
})


export default class login extends Component {

    constructor()
    {
        super()

        this.state = {
            email:"",
            senha:"",
            errors:[]
        }
    }

    handleLogin = () => {

        const login = {
            email:this.state.email,
            senha:this.state.senha
        }

      axios.post("http://10.0.2.2:5000/user/login_user", login)
      .then(res=>{
          
      })
      .catch(err=>this.setState({errors:err.response.data}))
    }

  render() {

    const {errors} = this.state;

    return (
      <View style={{padding:20}}>
          <TextInput placeholder="Email" onChangeText={(email) => this.setState({email})} value={this.state.email} />
          <Text style={style.styleErrors}>{errors.email}</Text>
          <TextInput placeholder="Password" onChangeText={(senha) => this.setState({senha})} value={this.state.senha} />
          <Text style={style.styleErrors}>{errors.senha}</Text>
          <Button title="Submit" onPress={this.handleLogin} />
      </View>
    );
  }
}
