import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios'
import {Label, ErrorText, Input, Div, Div2, Header, DivImage, Logo, Botao, AreaBotao, Texto, DivView2, Texto2} from "./AppStyles"
import moment from "moment"

export default class PessoaEE extends Component {

    constructor()
    {
        super()

        this.state = { 
            rua:"",
            numero:"",
            complemento:"",
            cep:"",
            cidade:"",
            estado:"",
            idUsuario:"",
            errors:[],
            primeiroNome:"",
            sobreNome:"",
            email:"",
            usuario:"",
            idEnt:"",
            idEndereco:"",
            emailOriginal:"",
            usuarioOriginal:"",
            dataNascimento:"",
            cpf:"",
            cpfOriginal:"",
            loading:false
        }
    }


    componentDidMount()
    {
        axios.get(`http://arcane-savannah-75129.herokuapp.com/profile/get_entregador/${this.props.navigation.getParam('id')}`)
        .then(res=>{
            console.log(res.data)
            this.setState({
                idUsuario:res.data.usu_id_usu,
                idEndereco:res.data.en_id_endereco,
                cep:res.data.en_cep,
                cidade:res.data.en_cidade,
                estado:res.data.en_estado,
                rua:res.data.en_rua,
                numero:res.data.en_numero,
                complemento:res.data.en_complemento,
                primeiroNome:res.data.primeiro_nome,
                sobreNome:res.data.sobre_nome,
                email:res.data.usu_email,
                idEnt:res.data.ent_id,
                dataNascimento:moment(res.data.uf_data_nascimento).format('DD-MM-YYYY'),
                usuario:res.data.nome_usuario,
                ativo:res.data.usu_ativo,
                cpf:res.data.ent_cpf,
                emailOriginal:res.data.usu_email,
                usuarioOriginal:res.data.nome_usuario,
                cpfOriginal:res.data.ent_cpf,
            })
        })
    }

    salvarEdit = (e) => {
        e.preventDefault();
        
        let editE = {
            dataNascimento:this.state.dataNascimento,
            cpf:this.state.cpf,
            rua:this.state.rua,
            numero:this.state.numero,
            complemento:this.state.complemento,
            cep:this.state.cep,
            cidade:this.state.cidade,
            estado:this.state.estado,
            primeiroNome:this.state.primeiroNome,
            sobreNome:this.state.sobreNome,
            email:this.state.email,
            usuario:this.state.usuario,
            idUsuario: this.state.idUsuario,
            idEndereco:this.state.idEndereco,
            idEnt:this.state.idEnt,
            emailOriginal:this.state.emailOriginal,
            usuarioOriginal:this.state.usuarioOriginal,
            cpfOriginal:this.state.cpfOriginal
        }

        console.log(editE)
        
        axios.post("http://arcane-savannah-75129.herokuapp.com/profile/update_entregador", editE)
        .then(res=>{
            alert("Editted")
            this.props.navigation.navigate("PerfilE")
        })
        .catch(err=>console.log(err));
        
    }

  render() {
      const {errors} = this.state
    return (
      <DivView2>
          <ScrollView>
        <Header>Editar Entregador</Header>
        <Div2>
            <Label>Primeiro Nome:</Label>
            <Input onChangeText={(primeiroNome)=>this.setState({primeiroNome})} value={this.state.primeiroNome} />
            <ErrorText>{errors.primeiroNome}</ErrorText>
        </Div2>

        <Div2>
            <Label>Sobre Nome:</Label>
            <Input onChangeText={(sobreNome)=>this.setState({sobreNome})} value={this.state.sobreNome} />
            <ErrorText>{errors.sobreNome}</ErrorText>
        </Div2>

        <Div2>
            <Label>CPF:</Label>
            <Input onChangeText={(cpf)=>this.setState({cpf})} value={this.state.cpf} />
            <ErrorText>{errors.cpf}</ErrorText>
        </Div2>

        <Div2>
            <Label>Data Nascimento:</Label>
            <Input onChangeText={(dataNascimento)=>this.setState({dataNascimento})} value={this.state.dataNascimento} />
            <ErrorText>{errors.dataNascimento}</ErrorText>
        </Div2>

        <Div2>
            <Label>Usuario:</Label>
            <Input onChangeText={(usuario)=>this.setState({usuario})} value={this.state.usuario} />
            <ErrorText>{errors.usuario}</ErrorText>
        </Div2>

        <Div2>
            <Label>Email:</Label>
            <Input onChangeText={(email)=>this.setState({email})} value={this.state.email} />
            <ErrorText>{errors.email}</ErrorText>
        </Div2>

        <Div2>
            <Label>Rua:</Label>
            <Input onChangeText={(rua)=>this.setState({rua})} value={this.state.rua} />
            <ErrorText>{errors.rua}</ErrorText>
        </Div2>

        <Div2>
            <Label>Numero:</Label>
            <Input onChangeText={(numero)=>this.setState({numero})} value={this.state.numero} />
            <ErrorText>{errors.numero}</ErrorText>
        </Div2>

        <Div2>
            <Label>Complemento:</Label>
            <Input onChangeText={(complemento)=>this.setState({complemento})} value={this.state.complemento} />
        </Div2>

        <Div2>
            <Label>CEP:</Label>
            <Input onChangeText={(cep)=>this.setState({cep})} value={this.state.cep} />
            <ErrorText>{errors.cep}</ErrorText>
        </Div2>

        <Div2>
            <Label>Cidade:</Label>
            <Input onChangeText={(cidade)=>this.setState({cidade})} value={this.state.cidade} />
            <ErrorText>{errors.cidade}</ErrorText>
        </Div2>

        <Div2>
            <Label>Estado:</Label>
            <Input onChangeText={(estado)=>this.setState({estado})} value={this.state.estado} />
        </Div2>

        <AreaBotao>
            <Botao onPress={this.salvarEdit} activeOpacity={0.8} > 
                <Texto>Edit</Texto>
            </Botao>
        </AreaBotao>
        </ScrollView>
      </DivView2>
    );
  }
}
