import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import jwtDecode from "jwt-decode"
import {Div, Input, Header, DivImage, Logo, Botao, AreaBotao, Texto, ErrorText, Div2} from "./AppStyles"
import kart from "./logo.jpg"

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

        

      axios.post("http://arcane-savannah-75129.herokuapp.com/user/login_user", login)
      .then(async res=>{
           AsyncStorage.setItem("jwtToken", res.data.token)
           AsyncStorage.getItem('jwtToken').then(res=>{
        
            const ativo = jwtDecode(res).ativo
    
            if(ativo === 0)
            {
              this.props.navigation.navigate('Profile')
            }
    
            else
            {
              this.props.navigation.navigate('Menu')
            }
          })
      })
      .catch(err=>this.setState({errors:err.response.data}))
    }

  render() {

    const {errors} = this.state;

    return (
      <Div>
        <Header>SpeedBuyer</Header>
          <Div2>
            <Input placeholder="Email" onChangeText={(email) => this.setState({email})} value={this.state.email} />
            <ErrorText>{errors.email}</ErrorText>
          </Div2>

          <Div2>
            <Input placeholder="Password" secureTextEntry={true} onChangeText={(senha) => this.setState({senha})} value={this.state.senha} />
            <ErrorText>{errors.senha}</ErrorText>
          </Div2>

          <AreaBotao>
            <Botao onPress={this.handleLogin} activeOpacity={0.8} > 
                <Texto>Login</Texto>
            </Botao>
        </AreaBotao>
      </Div>
    );
  }
}
