import React from 'react';
import styled from 'styled-components/native';
import { tsPropertySignature } from '@babel/types';

const Container = styled.SafeAreaView`
    flex:1;
`;

const Texto = styled.Text`
    font-size:15px;
`;

const Botao = styled.Button`
   
`;

const Page = (props)=>{
    return(
        <Container>
            <Texto>Pagina HOme</Texto>

            <Botao title="Fulano" onPress={()=>props.navigation
                    .navigate('Perfil')}    />
        </Container>
    );
}

export default Page;