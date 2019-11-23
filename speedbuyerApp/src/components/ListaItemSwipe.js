import React, { Component } from 'react'
import styled from 'styled-components/native';

const ListaItemSwipe = styled.TouchableHighlight`
    width:100%;
    height:50px;
    background-color:#e84848;
`;

const ImageTrash = styled.Image`
    width:50px;
    height:50px;
`;

export default (props)=> {    


        return (
           <ListaItemSwipe onPress={props.onDelete} underlayColor="#DDD" >
               <ImageTrash source={require('../images/icons/trash.png')} />
           </ListaItemSwipe>


        );
    
}


