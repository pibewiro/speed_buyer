import React,{Component} from 'react';
import styled from 'styled-components/native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import firebase from '../components/FirebaseConnection';
import Sistema from '../Sistema';


const Scroll = styled.ScrollView`
flex:1;

`;

const Area = styled.SafeAreaView`
    align-items:center;

`;

const Logo = styled.Image`
    width: 120px;
    height:120px;
    background-color:#000;
    border-radius:60px;
    margin-top:10px;
`;

const Botao = styled.TouchableOpacity`
  width:90% ;
  height:40px;
  align-items:center;
  justify-content:center;
  border:1px solid #ccc;
  margin-bottom:10px;
  background-color:#f4f4f4;
`;

const TextBotao = styled.Text`
    font-family:sans-serif;
    font-size:15px;
`;



export default class CustomDrawer extends Component{

  

    constructor(props){
        super(props);
        this.state ={
            nome:''
        };

        this.sair = this.sair.bind(this);

        if(firebase.auth().currentUser){
            firebase.database().ref('usuarios')
            .child(firebase.auth().currentUser.uid)
            .once('value')
            .then((snapshot)=>{
                let state = this.state;
                state.nome = snapshot.val().nome;
                this.setState(state);
            });
        }
    }

    sair(){
        Sistema.logout();
        this.navigation.navigate('Login')
    }

render() {
return(
    <Scroll>
        <Area>
            <Logo source={require('../images/user.png')}/>
                <TextBotao>Ola,{this.state.nome}</TextBotao>
            <DrawerNavigatorItems 
            {...this.props} 
                itemsContainerStyle={{width:'100%'}}
            
            />

            <Botao onPress={this.sair}>
                <TextBotao>Sair</TextBotao>
            </Botao>
        </Area>
    </Scroll>

);

}

}