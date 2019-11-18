import React, { Component } from 'react';
import {StyleSheet, AppRegistry, Text, View, TextInput, Button} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

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

    componentDidMount()
    {
      try
      {
        if('jwtToken' in AsyncStorage === true)
        {
          alert(123)
        }
      }

      catch(err)
      {
        console.log(err)
      }

    }

    handleLogin = () => {

        const login = {
            email:this.state.email,
            senha:this.state.senha
        }

      axios.post("http://10.0.2.2:5000/user/login_user", login)
      .then(async res=>{
          AsyncStorage.setItem("jwtToken", res.data.token)
          this.props.navigation.navigate('Menu')
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
