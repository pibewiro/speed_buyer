
import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image} from 'react-native'
import styled from 'styled-components/native';
import axios from 'axios'

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
            storesList:[]
        }
    }   
  


    static navigationOptions = {

        title:'Perfil',
        headerLeft:<ToggleArea onPress={()=>props.navigation.openDrawer() } >
                        <ImageMenu source={require('../images/icons/menu.png')} />
                   </ToggleArea>
    };
   
    
    componentDidMount()
    {
        axios.get('http://10.0.3.2:9000/lojas/get_stores')
        .then(res=>this.setState({storesList:res.data.result}))
        .catch(err=>alert('error'))
    }

    render() {
        return (
            <View>
                {this.state.storesList.map(res=>(<Text>{res.en_cep}</Text>))}
            </View>
        )
    }
}





