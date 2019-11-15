import React,{Component} from 'react';
import styled from 'styled-components/native';
import firebase from '../components/FirebaseConnection';

const Container = styled.SafeAreaView`   
    flex:1;
    justify-content:center;
    align-items:center;
`;

const Background = styled.ImageBackground`
    width:100%;
    height:100%;
`;

const Texto = styled.Text`
    font-size:15px;
    margin:15px;
    font-family:Arial;
`;

const Titulo = styled.Text`
    font-size:20px;
    margin:15px;
    font-weight:bold;
`;

const InputField = styled.View`
    display:flex;
    flex-direction:column;
    height:auto ;
    margin:0 15px 0 15px;
`;

const Input = styled.TextInput`
    width:100%;
    height:35px;
    border:1px solid #000;
    background-color:#fff;
    color:#000;    

`;

const TituloInput = styled.Text`
    font-size:18px;
    font-weight:bold;
    margin-top:5px;

`;

const Scroll = styled.ScrollView`
    

`;

const AreaBotao = styled.View`
    width:150px;
    margin-top:20px;
    margin:auto;
    padding:20px;

`;


const Botao = styled.Button`

`;



export default class Cadastro extends Component {

    constructor(props){
        super(props);
        this.state ={
            nome:'',
            email:'',
            senha:''
        };

        this.cadastrar = this.cadastrar.bind(this);
        
        firebase.auth().signOut();

        firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
                firebase.database().ref('usuarios').child(user.uid).set({
                    nome:this.state.nome
                });

                alert("Usuario Criado com sucesso");
            }
        });
    }

    cadastrar(){
        firebase.auth().createUserWithEmailAndPassword(
            this.state.email,
            this.state.senha
            ).catch((error)=>{
                switch(error.code){
                    case 'auth/weak-password':
                        alert("Sua senha deve ter pelo menos 6 caracteres!");
                    break;   
                    case 'auth/email-already-in-use':
                        alert("Email ja cadastrado!!");
                    break;  
                    default:
                        alert("Ocorreu um erro! Tente Novamente");
                    break;     
                }
                   
            });
        
    }

    render() {
        return (
            <Container>
            <Background source={require('../images/Backgrounds/bgCinza.jpg')}>
            <Scroll>
                <Titulo>Faça seu cadastro</Titulo>
                <Texto>Preencha os campos do formulario 
                com os seus dados, e torne-se 
                um cliente de nosso APP</Texto>


              
                <InputField>
                    <TituloInput>Nome:</TituloInput>
                    <Input placeholder="Nome Completo:"
                         onChangeText={(nome)=>this.setState({nome})}/>
                </InputField>


                <InputField>
                    <TituloInput>E-MAIL</TituloInput>
                    <Input placeholder="EXEMPLO@EXEMPLO.COM"  
                        onChangeText={(email)=>this.setState({email})}/>
                </InputField>

                <InputField>
                    <TituloInput>SENHA</TituloInput>
                    <Input secureTextEntry={true} 
                         onChangeText={(senha)=>this.setState({senha})}/>
                </InputField>         

                <AreaBotao>
                    <Botao title="ENVIAR" onPress={this.cadastrar}  />
                </AreaBotao>





            </Scroll>
    
            </Background>
        </Container>

             
        );
  
}


}