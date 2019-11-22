import React,{Component} from 'react';
import styled from 'styled-components/native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';

import AsyncStorage from '@react-native-community/async-storage';

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
            primeiro_nome:'',
            sobre_nome:''
        };

        this.sair = this.sair.bind(this);
      
    }


    componentDidMount()
    {
        AsyncStorage.getItem('jwtToken')
        .then(async res=>{
          
          const sn = await jwtDecode(res).sobre_nome
          this.setState({primeiro_nome:jwtDecode(res).primeiro_nome})
         
        })
    }

    sair(){
        this.navigation.navigate('Login')
    }

render() {
return(
    <Scroll>
        <Area>
            <Logo source={require('../images/user.png')}/>
                <TextBotao>Ola,{this.state.primeiro_nome}</TextBotao>
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