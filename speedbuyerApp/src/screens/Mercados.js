import React from 'react';
import styled from 'styled-components/native';
import listaMercado from '../ListaMercado'
import ListaItemMercados from '../components/ListaItemMercados'

const Container = styled.SafeAreaView`
    flex:1;
`;

const Listagem = styled.FlatList`
    flex:1;
`;






const Page = (props)=>{
    return(
    <Container>
        <Listagem 
            data={listaMercado}
            renderItem={({item})=><ListaItemMercados data={item} /> }
            keyExtractor={(item)=>item.id}

        />   
       
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
        title:' Mercados ',
        headerLeft:<ToggleArea onPress={()=>props.navigation.openDrawer() } >
                        <ImageMenu source={require('../images/icons/menu.png')} />
                   </ToggleArea>
    }
}

export default Page;