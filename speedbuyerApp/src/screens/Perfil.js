
import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image, AsyncStorage} from 'react-native'
import styled from 'styled-components/native';
import axios from 'axios'
import PerfilJ from './PerfilJ'
import PerfilE from './PerfilE'
import PerfilF from './PerfilF'
import PerfilA from './PerfilA'

import jwtDecode from "jwt-decode"

const ToggleArea = styled.TouchableHighlight`
width:50px;
height:50px ;
`;

const ImageMenu = styled.Image`
width:50px;
height:50px ;
`;

export default class Perfil extends Component {

    constructor(props)
    {
        super(props)

        this.state = {
            ativo:""
        }
    }   

    componentDidMount()
    {
      AsyncStorage.getItem("jwtToken")
      .then(res=>this.setState({ativo:jwtDecode(res).ativo}))
      .then(res=>console.log(this.state))
    }
  


    static navigationOptions = {

        title:'Perfil',
        headerLeft:<ToggleArea onPress={()=>props.navigation.openDrawer() } >
                        <ImageMenu source={require('../images/icons/menu.png')} />
                   </ToggleArea>
    };
   
    


    render() {
        return (
            this.state.ativo === 1 ? <PerfilF navigation={this.props.navigation} /> : this.state.ativo === 2 ? <PerfilJ navigation={this.props.navigation} /> : this.state.ativo === 3 ? <PerfilE navigation={this.props.navigation} /> : <PerfilA />
        )
    }
}





