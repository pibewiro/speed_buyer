import React,{Component} from 'react';
import styled from 'styled-components/native';
import {NavigationActions, StackActions}from 'react-navigation';
import Selecao from '../components/SelecaoPiker';
import Sistema from '../Sistema';
import { Item } from 'native-base';

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



export default class Login extends Component{

    constructor(props){
        super(props);
        this.state ={
            email:'',
            senha:'',
            addItemTxt:'',
            uid:''
        };

        this.handleLogin = this.handleLogin.bind(this);
       
        
      Sistema.logout();

        
        
    }

    handleLogin() {        

        Sistema.addAuthListener((user)=>{
            if(user){

                
                    const resetAction = StackActions.reset({
                        index:0,
                        actions:[
                           NavigationActions.navigate({routeName:'HomeDrower'})
                        ]
                    });
    
                    this.props.navigation.dispatch(resetAction);
            


                 
                            
               
            }
        });


        Sistema.login(this.state.email, this.state.senha).catch((error)=>{
            if(error.code == 'auth/wrong-password'){
                alert("Senha Invalida !");
            }else{
                alert("Tente Novamente");
            }
        });

        
       


    }

   
   

render() {
   
    return(
        

<Background source={require('../images/Backgrounds/carrinho.jpg' )}>
    <Container>          

                <Selecao  />    
        
                <Input placeholder="Email"  onChangeText={(email)=>this.setState({email})}/>

                <Input placeholder="Senha"  onChangeText={(senha)=>this.setState({senha})}/>

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