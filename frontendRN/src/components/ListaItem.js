import React, { Component } from 'react'
import styled from 'styled-components/native';

const ItemList = styled.TouchableHighlight`
    background-color:#fdfdfd;
    flex-direction:row;
    margin-bottom:5px;
    border:1px solid #ccc;
    height:50px;
    justify-content:center;
    align-items:center;
    padding-left:20px;
    padding-right:20px;

`;

const ItemText = styled.Text`
    font-size:15px;
    flex:1;
`;

const ItemCheck = styled.View`
    width:20px;
    height:20px;
    border:${props=>props.done?'5px solid #05f219;':'5px solid #e00b0b;'};
    background-color:${props=>props.done?'#05f219':'transparent'};
`;

export default (props) => {    
        return (
            <ItemList onPress={props.onPress} underlayColor="#ddd">
                <>
                    <ItemText>{props.data.task}</ItemText>
                    <ItemCheck done={props.data.done}></ItemCheck>
                </>   
                </ItemList>

        );
    
}


