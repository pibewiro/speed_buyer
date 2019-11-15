import React, {Component,useState} from 'react';
import {StyleSheet } from 'react-native'
import styled from 'styled-components/native';
import uuid from 'uuid/v4';
//import {SwipeListView} from 'react-native-swipe-list-view';
import ListaItemSwipe from '../components/ListaItemSwipe';
import firebase from '../components/FirebaseConnection';
import { Button, Item } from 'native-base';

const Container = styled.SafeAreaView`
    flex:1;
`;

const Background = styled.ImageBackground`
    width:100%;
    height:100%;
`;


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

const AreaBotao = styled.View`
    width:150px;
    margin-top:10px;
    height:40px;
`;


const Botao = styled.TouchableOpacity`
   padding:5px;
   background-color:#0e367c;
   width:150px;
   height:30px;
   justify-content:center;
   align-items:center;
   border-radius:15px;
`;

const Texto = styled.Text`
    font-size:18px;
    color:#ffffff;
    font-weight:bold;

`;

const ItemText = styled.Text`
    font-size:15px;
    flex:1;
    color:#000;
`;

const ItemCheck = styled.View`
    width:20px;
    height:20px;
    border:${props=>props.done?'5px solid #05f219;':'5px solid #e00b0b;'};
    background-color:${props=>props.done?'#05f219':'transparent'};
`;

const ScrollArea = styled.KeyboardAvoidingView `    
    align-items:center;
    margin:auto;
    background-color:#fdfdfd;

`;

const Image = styled.Image`

`;

const AddItemArea = styled.KeyboardAvoidingView`
    background-color:#ccc;
    justify-content:center;
    align-items:center;
`;

const AddItemInput = styled.TextInput`
    background-color:#fff;
    font-size:15px;
    height:50px;
    border-radius:5px;
`;

const SwipeListView = styled.FlatList`
    
    background-color:#ff0000;
`;




export default class Login extends Component{

    constructor(props){
        super(props);
        this.state ={
            addItemTxt:'',
            lista:[],
            uid:''
        };

        this.addNewItem = this.addNewItem.bind(this);
        


        if(firebase.auth().currentUser){
            firebase.database().ref('usuarios')
            .child(firebase.auth().currentUser.uid)
            .once('value')
            .then((snapshot)=>{
                let state = this.state;
                state.uid = snapshot.val().uid;

                this.setState(state);

            });

            firebase.database().ref(firebase.auth().currentUser.uid).child('listadecompras').on('value',(snapshot)=>{
                let state = this.state;
                state.lista = [];

                snapshot.forEach((childItem)=>{       
                    
                  alert(childItem.val().titulo);  
                           
                    state.lista.push({
                        titulo:childItem.val().titulo,
                        key:childItem.key
                        
                    });
                    
                     
                });

                

                this.setState(state);
            });
        }

  

    }


    addNewItem(){
        if(firebase.auth().currentUser  && this.state.addItemTxt!=''){
            let listadecompras = firebase.database().ref('listadecompras').child(firebase.auth().currentUser.uid)
            let chave = listadecompras.push().key;
            listadecompras.child(chave).set({
                titulo:this.state.addItemTxt
            })
            
        }
       
    }




render(){

    
    return(
        <Container>       
             <Background 
            //  source={require('../images/Backgrounds/shoplist.jpg')}
             >
             <AddItemArea behavior="height">
                <AddItemInput placeholder="Digite um novo item"
                    value={this.state.addItemTxt}
                    onChangeText={(addItemTxt)=>this.setState({addItemTxt})}                           
                />

                <AreaBotao>
                    <Botao onPress={this.addNewItem} activeOpacity={0.8} > 
                        <Texto>Add</Texto>
                    </Botao>
                </AreaBotao>

          </AddItemArea>
             <ScrollArea behavior="height">
                <SwipeListView  style={styles.Listagem}
                   data={this.state.lista}
                   renderItem={({item})=>{
                       return(
                           <ItemText>{item.titulo}</ItemText>
                       );
                   }}
                  
                />

             </ScrollArea>               
            </Background>   
        </Container>
    );
}

}

const styles = StyleSheet.create({
    Listagem:{       
        width:270,
        height:400,
        marginLeft:5,
        marginRight:5

    }
})


// Page.navigationOptions = (props) =>{

//     const ToggleArea = styled.TouchableHighlight`
//         width:50px;
//         height:50px ;
//     `;

//     const ImageMenu = styled.Image`
//         width:50px;
//         height:50px ;
//     `;

//     return{
//         title:' Lista de Compras ',
//         headerLeft:<ToggleArea onPress={()=>props.navigation.openDrawer() } >
//                         <ImageMenu source={require('../images/icons/menu.png')} />
//                    </ToggleArea>
//     }
// }

