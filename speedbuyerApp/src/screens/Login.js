import React,{Component} from 'react';
import {NavigationActions, StackActions}from 'react-navigation';
import styled from 'styled-components/native';
import Selecao from '../components/SelecaoPiker';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import jwtDecode from "jwt-decode"

const Container = styled.SafeAreaView`
    flex:1;
    justify-content:center;
    align-items:center;
`;


const Texto = styled.Text`
    font-size:18px;
    color:#ffffff;
    font-weight:bold;

`;

const AreaBotao = styled.View`
    width:170px;
    margin-top:20px;
    height:40px;
`;


const Botao = styled.TouchableOpacity`
   padding:5px;
   background-color:#0e367c;
   width:190px;
   height:50px;
   justify-content:center;
   align-items:center;
   border-radius:15px;
`;

const Background = styled.ImageBackground`
    width:100%;
    height:100%;
    opacity:0.8;
    
`;


const Input = styled.TextInput`
    width:250px;
    height:40px;
    margin:10px;
    color:#000;
    border-bottom-color:#000;
    border-bottom-width:2;
    

`;



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
               
                this.props.navigation.navigate('HomeDrower')
               
                   
            } 
    
            else
            {
              this.props.navigation.navigate('Cadastro')
            }
          })
      })
      .catch(err=>this.setState({errors:err.response.data}))
    }
   
   

render() {

    const {errors} = this.state;
   
    return(
        

<Background source={require('../images/Backgrounds/carrinho.jpg' )}>
    <Container>          

                <Selecao  />    
        
                <Input placeholder="Email" onChangeText={(email) => this.setState({email})} value={this.state.email}/>
                <Texto>{errors.email}</Texto>

                <Input placeholder="Password" secureTextEntry={true} onChangeText={(senha) => this.setState({senha})} value={this.state.senha}/>
                <Texto>{errors.senha}</Texto>

                <AreaBotao>
                    <Botao onPress={this.handleLogin} activeOpacity={0.8} > 
                        <Texto>Logar</Texto>
                    </Botao>
                </AreaBotao>
              
           
        </Container>
</Background>

    );
}

}