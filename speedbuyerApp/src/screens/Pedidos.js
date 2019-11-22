import React, {Component} from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
    flex:1;
`;

const Texto = styled.Text`
    font-size:15px;
`;


const Page = (props)=>{
    return(
        <Container>
            
                
            
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
        title:' Meus Pedidos ',
        headerLeft:<ToggleArea onPress={()=>props.navigation.openDrawer() } >
                        <ImageMenu source={require('../images/icons/menu.png')} />
                   </ToggleArea>
    }
}

export default Page;