import React, {Component} from 'react';
import styled from 'styled-components/native';
import { tsPropertySignature } from '@babel/types';

const Container = styled.SafeAreaView`
    flex:1;
`;

const Texto = styled.Text`
    font-size:15px;
`;

const AreaBotao = styled.View`
    width:150px;
    margin-top:20px;
    height:100px;
`;

const Image = styled.Image`

`;


const Botao = styled.Button`

`;

const Page = (props)=>{
    return(
        <Container>
            <Texto>CARRINHO DE COMPRAS</Texto>

            <AreaBotao>
              <Botao title="Abrir Drawer" onPress={()=>props.navigation.openDrawer() }    />
            </AreaBotao>
        </Container>
    );
}

Page.navigationOptions = (props) =>{

    const ToggleArea = styled.TouchableHighlight`
        width:50px;
        height:50px ;
    `;

    const ImageMenu = styled.Image`
        width:50px;
        height:50px ;
    `;

    return{
        title:' Meu Carrinho ',
        headerLeft:<ToggleArea onPress={()=>props.navigation.openDrawer() } >
                        <ImageMenu source={require('../images/icons/menu.png')} />
                   </ToggleArea>
    }
}

export default Page;