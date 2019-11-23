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
                usuario:res.data.nome_usuario,
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

    

    changeEmail = e => this.setState({email:e.target.value})
    changePrimeiroNome = e => this.setState({primeiroNome:e.target.value})
    changeSobreNome = e => this.setState({sobreNome:e.target.value})
    changeSenha = e => this.setState({senha:e.target.value})
    changeCnpj = e => this.setState({cnpj:e.target.value})
    changeNomeFantasia = e => this.setState({nomeFantasia:e.target.value})
    changeRazaoSocial = e => this.setState({razaoSocial:e.target.value})
    changeInscricaoMun = e => this.setState({inscricaoMun:e.target.value})
    changeInscricaoEst = e => this.setState({inscricaoEst:e.target.value})
    changeRua = e => this.setState({rua:e.target.value})
    changeNumero = e => this.setState({numero:e.target.value})
    changeCep = e => this.setState({cep:e.target.value})
    changeCidade = e => this.setState({cidade:e.target.value})
    changeEstado = e => this.setState({estado:e.target.value})
    changeComplemento = e => this.setState({complemento:e.target.value})
    changeUsuario = e => this.setState({usuario:e.target.value})

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

        /*
        axios.post("http://arcane-savannah-75129.herokuapp.com/profile/update_pessoa_juridica", editPJ)
        .then(()=>{
           // this.limparState();
            /*Swal.fire({
                title:"Created New Pessoa Juridica",
                text:"Um novo Pessoa Fisica foi editado", 
                type:"success",
                confirmButtonColor: '#00283D',
            }) 
            console.log("E", editPJ);
        })
        .catch(err=>this.setState({errors:err.response.data}));
    */
    }

  render() {
      const {errors} = this.state
    return (
      <DivView2>
          <ScrollView>
        <Header>Editar Pessoa Juridico</Header>
        <Div2>
            <Label>Primeiro Nome:</Label>
            <Input value={this.state.primeiroNome} />
            <ErrorText>{errors.primeiroNome}</ErrorText>
        </Div2>

        <Div2>
            <Label>Sobre Nome:</Label>
            <Input value={this.state.sobreNome} />
        </Div2>

        <Div2>
            <Label>Email:</Label>
            <Input value={this.state.email} />
        </Div2>

        <Div2>
            <Label>Usuario:</Label>
            <Input value={this.state.usuario} />
        </Div2>

        <Div2>
            <Label>CNPJ:</Label>
            <Input value={this.state.cnpj} />
        </Div2>

        <Div2>
            <Label>Nome Fantasia:</Label>
            <Input value={this.state.nomeFantasia} />
        </Div2>

        <Div2>
            <Label>Razão Social:</Label>
            <Input value={this.state.razaoSocial} />
        </Div2>

        <Div2>
            <Label>Inscrição Municipal:</Label>
            <Input value={this.state.inscricaoMun} />
        </Div2>

        <Div2>
            <Label>Inscrição Estadual:</Label>
            <Input value={this.state.inscricaoEst} />
        </Div2>

        <Div2>
            <Label>Rua:</Label>
            <Input value={this.state.rua} />
        </Div2>

        <Div2>
            <Label>Numero:</Label>
            <Input value={this.state.numero} />
        </Div2>

        <Div2>
            <Label>Complemento:</Label>
            <Input value={this.state.complemento} />
        </Div2>

        <Div2>
            <Label>CEP:</Label>
            <Input value={this.state.cep} />
        </Div2>

        <Div2>
            <Label>Cidade:</Label>
            <Input value={this.state.cidade} />
        </Div2>

        <Div2>
            <Label>Estado:</Label>
            <Input value={this.state.estado} />
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
