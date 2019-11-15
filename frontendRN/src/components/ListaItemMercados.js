import React from 'react';
import styled from 'styled-components/native';


const Area = styled.TouchableOpacity
`
    height:85px;
    border-bottom-width:1px;
    border-color:#cccccc;
    flex:1;
    flex-direction:row;

`;

const Imagem = styled.Image`
    width:100px;
    height:70px ;
    margin-top:5px;
    margin-left:10px;

`;


const Info = styled.View`
    flex:1;
    flex-direction:column;
    justify-content:center;    
    padding-bottom:10px;    
    padding-top:10px;

`;

const TextName = styled.Text`
    font-size:18px;
    font-weight:bold;
    margin-left:10px;
    margin-right:10px;

    `;

const TextEnd = styled.Text`
    font-size:12px;
    margin-left:10px;
    margin-right:10px;
`;



export default (props) =>{
    return(
        <Area onPress={()=>{}} >
                <Imagem source={props.data.imagem} />
                <Info>
                    <TextName>{props.data.nome}</TextName>
                    <TextEnd>Rua:{props.data.rua}N:{props.data.numero}</TextEnd>
                    <TextEnd>Bairro:{props.data.bairro}</TextEnd>
                    <TextEnd>Cidade:{props.data.bidade} ,{props.data.estado}</TextEnd>
                </Info>     

         </Area>
    )
}