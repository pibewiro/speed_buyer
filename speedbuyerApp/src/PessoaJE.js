import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios'
import {Label, ErrorText, Input, Div, Div2, Header, DivImage, Logo, Botao, AreaBotao, Texto, DivView2, Texto2} from "./AppStyles"

export default class PessoaJE extends Component {
    constructor()
    {
        super()

        this.state = { 
            cnpj:"",
            nomeFantasia:"",
            razaoSocial:"",
            inscricaoMun:"",
            inscricaoEst:"",
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
            idUJ:"",
            idEndereco:"",
            emailOriginal:"",
            usuarioOriginal:"",
            cnpjOriginal:"",
            nomeFantasiaOriginal:"",
            razaoSocialOriginal:"",
            insEstOriginal:"",
            insMunOriginal:"",
        }
    }

    componentDidMount()
    {
        axios.get(`http://arcane-savannah-75129.herokuapp.com/profile/get_pessoa_juridico/${this.props.navigation.getParam('id')}`)
        .then(res=>{
            console.log(res.data)
            this.setState({
                primeiroNome:res.data.primeiro_nome,
                sobreNome:res.data.sobre_nome,
                usuario:res.data.nome_usuario,
                nomeFantasia:res.data.uj_nome_fantasia,
                razaoSocial:res.data.uj_razao_social,
                inscricaoMun:res.data.uj_inscricao_estadual,
                inscricaoEst:res.data.uj_inscricao_municipal,
                rua:res.data.en_rua,
                numero:res.data.en_numero,
                complemento:res.data.en_complemento,
                cep:res.data.en_cep,
                cidade:res.data.en_cidade,
                estado:res.data.en_estado,
                cnpj:res.data.uj_cnpj,
                email:res.data.usu_email,
                idUsuario:res.data.usu_id_usu,
                idEndereco:res.data.en_id_endereco,
                idUJ:res.data.id_uj,
                emailOriginal:res.data.usu_email,
                usuarioOriginal:res.data.nome_usuario,
                cnpjOriginal:res.data.uj_cnpj,
                nomeFantasiaOriginal:res.data.uj_nome_fantasia,
                razaoSocialOriginal:res.data.uj_razao_social,
                insEstOriginal:res.data.uj_inscricao_estadual,
                insMunOriginal:res.data.uj_inscricao_municipal,
                loading:false
            })
        })
    }

    salvarEdit = (e) => {
        e.preventDefault();
        
        let editPJ = {
            cnpj:this.state.cnpj,
            nomeFantasia:this.state.nomeFantasia,
            razaoSocial:this.state.razaoSocial,
            inscricaoMun:this.state.inscricaoMun,
            inscricaoEst:this.state.inscricaoEst,
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
            idUJ:this.state.idUJ,
            emailOriginal:this.state.emailOriginal,
            usuarioOriginal:this.state.usuarioOriginal,
            cnpjOriginal:this.state.cnpjOriginal,
            nomeFantasiaOriginal:this.state.nomeFantasiaOriginal,
            razaoSocialOriginal:this.state.razaoSocialOriginal,
            insEstOriginal:this.state.insEstOriginal,
            insMunOriginal:this.state.insMunOriginal
        }

        console.log(editPJ)

        
        axios.post("http://arcane-savannah-75129.herokuapp.com/profile/update_pessoa_juridica", editPJ)
        .then(()=>{
            alert("Editted")
            this.props.navigation.navigate("PerfilJ")
        })
        .catch(err=>this.setState({errors:err.response.data}));
    }

  render() {
      const {errors} = this.state
    return (
      <DivView2>
          <ScrollView>
        <Header>Editar Pessoa Juridico</Header>
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
            <Label>Email:</Label>
            <Input onChangeText={(email)=>this.setState({email})} value={this.state.email} />
            <ErrorText>{errors.email}</ErrorText>
        </Div2>

        <Div2>
            <Label>Usuario:</Label>
            <Input onChangeText={(usuario)=>this.setState({usuario})} value={this.state.usuario} />
            <ErrorText>{errors.usuario}</ErrorText>
        </Div2>

        <Div2>
            <Label>CNPJ:</Label>
            <Input onChangeText={(cnpj)=>this.setState({cnpj})} value={this.state.cnpj} />
            <ErrorText>{errors.cnpj}</ErrorText>
        </Div2>

        <Div2>
            <Label>Nome Fantasia:</Label>
            <Input onChangeText={(nomeFantasia)=>this.setState({nomeFantasia})} value={this.state.nomeFantasia} />
            <ErrorText>{errors.nomeFantasia}</ErrorText>
        </Div2>

        <Div2>
            <Label>Razão Social:</Label>
            <Input onChangeText={(razaoSocial)=>this.setState({razaoSocial})} value={this.state.razaoSocial} />
            <ErrorText>{errors.razaoSocial}</ErrorText>
        </Div2>

        <Div2>
            <Label>Inscrição Municipal:</Label>
            <Input onChangeText={(inscricaoMun)=>this.setState({inscricaoMun})} value={this.state.inscricaoMun} />
            <ErrorText>{errors.inscricaoMun}</ErrorText>
        </Div2>

        <Div2>
            <Label>Inscrição Estadual:</Label>
            <Input onChangeText={(inscricaoEst)=>this.setState({inscricaoEst})} value={this.state.inscricaoEst} />
            <ErrorText>{errors.inscricaoEst}</ErrorText>
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
