import React, {Component} from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
    flex:1;
`;

const Texto = styled.Text`
    font-size:15px;
`;

const Scroll = styled.ScrollView`
    flex:1;
`;

const ViewStore = styled.View`
    margin-top:50px;
    width:100%;
    height: auto;
    padding:5px;
    flex:1;
    flex-direction:row;
`;

const Promocoes = styled.TouchableOpacity`
    width:49%;
    height:120px;
    margin:3px;
`;


const ImagePromocao = styled.Image`
    width:100%;
    height:100%;
    border-radius:20px;
    border:1px solid #000;
`;

const ViewCategorias = styled.View`
    width:100%;
    height:auto ;
    flex:1;
    flex-direction:row;    
    flex-wrap:wrap;

`;

const CatConteiner = styled.TouchableOpacity`
    width:100px;
    height:110px;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:10px;
    padding:5px;
    border-radius:10px;
    border:1px solid #000;

`;

const Image = styled.Image`
    width:80px;
    height: 70px; 
    border-radius:15px;
`;


const CatText = styled.Text`
    font-size:12px;
    font-weight:bold;
`;

const ContainerBox = styled.View`
    padding-top:5px;
    margin-bottom:20px;
    width:100%;
    height:200px;
`;

const HorizontalScrol = styled.ScrollView`
    width:100%;
    height:150px;
    margin:auto;
    margin-left:5px;
`;

const ScrollBox = styled.TouchableOpacity`
    width:280px;
    height:100%;
    padding:10px;
    margin-left:5px;
    margin-right:5px;
`;

const ImageBox = styled.Image`
    width:100%;
    height:100%;
    margin-left:5px;
    margin-right:5px;
    border:1px solid #ccc;
`;

const TitleText = styled.Text `
    font-size:22px;
    font-weight:bold;
    margin:10px;
`;




const Page = (props)=>{

    
    return(
        <Container>

       
            <Scroll>
                <ViewStore>
                    <Promocoes>
                     <ImagePromocao resizeMode="cover"
                     source={require('../images/promocoes/thumbs.jpg')}/>
                    </Promocoes>

                    <Promocoes>
                     <ImagePromocao resizeMode="cover"
                     source={require('../images/promocoes/semana.jpg')}/>
                    </Promocoes>
                </ViewStore>

        

                <ViewCategorias>
                    <CatConteiner>
                        <Image resizeMode="stretch" source={require('../images/categorias/mercearia2.gif')}/>
                        <CatText>MERCEARAIA</CatText>
                    </CatConteiner>   

                    <CatConteiner>
                        <Image resizeMode="stretch" source={require('../images/categorias/bebidas.png')}/>
                        <CatText>BEBIDAS</CatText>
                    </CatConteiner>

                    <CatConteiner>
                        <Image resizeMode="stretch" source={require('../images/categorias/congelados.png')}/>
                        <CatText>CONGELADOS</CatText>
                    </CatConteiner>

                    <CatConteiner>
                        <Image resizeMode="stretch" source={require('../images/categorias/diet.png')}/>
                        <CatText>DIET, LIGTH E ZERO</CatText>
                    </CatConteiner> 

                    <CatConteiner>
                        <Image resizeMode="stretch" source={require('../images/categorias/FriosELaticinios.jpg')}/>
                        <CatText>FRIOS E LATICINIOS</CatText>
                    </CatConteiner> 

                    <CatConteiner>
                        <Image resizeMode="stretch" source={require('../images/categorias/higiene2.png')}/>
                        <CatText>HIGIENE E BELEZA</CatText>
                    </CatConteiner> 

                    <CatConteiner>
                        <Image resizeMode="stretch" source={require('../images/categorias/hortifrut2.jpg')}/>
                        <CatText>HORTIFRUT</CatText>
                    </CatConteiner> 

                    <CatConteiner>
                        <Image resizeMode="stretch" source={require('../images/categorias/limpeza2.png')}/>
                        <CatText>LIMPEZA</CatText>
                    </CatConteiner> 

                    <CatConteiner>
                        <Image resizeMode="stretch" source={require('../images/categorias/ofertas.png')}/>
                        <CatText>OFERTAS</CatText>
                    </CatConteiner> 

                    <CatConteiner>
                        <Image resizeMode="stretch" source={require('../images/categorias/ofertas.png')}/>
                        <CatText>ORGANICOS</CatText>
                    </CatConteiner> 

                    <CatConteiner>
                        <Image resizeMode="stretch" source={require('../images/categorias/Padaria.png')}/>
                         {/* <CatText>PADARIA</CatText> */}
                    </CatConteiner> 

                    <CatConteiner>
                        <Image resizeMode="stretch" source={require('../images/categorias/FriosELaticinios.jpg')}/>
                        <CatText>PETS</CatText>
                    </CatConteiner>  

                    <CatConteiner>
                        <Image resizeMode="stretch" source={require('../images/categorias/pets3.png')}/>
                        <CatText>ESCRITORIO</CatText>
                    </CatConteiner> 

                    <CatConteiner>
                        <Image resizeMode="stretch" source={require('../images/categorias/DOMENTICO.png')}/>
                        <CatText>ULTILIDADES DOMESTICAS</CatText>
                    </CatConteiner>                     
                              
                </ViewCategorias>

                <ContainerBox>
                    <TitleText>Promocoes</TitleText>
                    <HorizontalScrol horizontal= {true} >
                       
                        <ScrollBox>
                            <ImageBox resizeMode="stretch" source={require('../images/promocoes/ofertas.png')}/>   
                        </ScrollBox>  

                        <ScrollBox>
                            <ImageBox resizeMode="stretch" source={require('../images/promocoes/promoções.png')}/>   
                        </ScrollBox>  

                        <ScrollBox>
                            <ImageBox resizeMode="stretch" source={require('../images/promocoes/thumbs.jpg')}/>   
                        </ScrollBox>                    

                       
                                            

                    </HorizontalScrol>
                </ContainerBox>

                <ContainerBox>
                    <TitleText>Mercados</TitleText>
                    <HorizontalScrol horizontal= {true} >
                       
                        <ScrollBox>
                            <ImageBox resizeMode="stretch" source={require('../images/Mercados/atacadao.jpg')}/>   
                        </ScrollBox>  

                        <ScrollBox>
                            <ImageBox resizeMode="stretch" source={require('../images/Mercados/carrefour.gif')}/>   
                        </ScrollBox>  

                        <ScrollBox>
                            <ImageBox resizeMode="stretch" source={require('../images/Mercados/makro.png')}/>   
                        </ScrollBox>  

                        <ScrollBox>
                            <ImageBox resizeMode="stretch" source={require('../images/Mercados/tenda.png')}/>   
                        </ScrollBox>  

                                                                    

                    </HorizontalScrol>
                </ContainerBox>



            </Scroll>            
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
        title:' Inicio ',
        headerLeft:<ToggleArea onPress={()=>props.navigation.openDrawer() } >
                        <ImageMenu source={require('../images/icons/menu.png')} />
                   </ToggleArea>

                   
    }
}

export default Page;


