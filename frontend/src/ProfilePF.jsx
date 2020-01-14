import React, { Component } from 'react'
import axios from 'axios'
import jwtDecode from "jwt-decode";
import {Link} from "react-router-dom"
import moment from "moment"

export default class ProfilePF extends Component {

    constructor()
    {
        super()
        
        this.state = {
            primeiroNome:"",
            sobreNome:"",
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
            cpf:"",
            cnpj:"",
            idUsuario:jwtDecode(localStorage.getItem("jwtToken")).id_usuario,
            usuario:"",
            email:"",
            ativo:null,
        }
    }

    componentDidMount()
    {
        axios.get(`profile/get_pessoa_fisica/${this.state.idUsuario}`)
        .then(res=>{
            console.log(res.data)
            this.setState({
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
                idUF:res.data.id_uf,
                dataNascimento:moment(res.data.uf_data_nascimento).format("MM-DD-YYYY"),
                usuario:res.data.nome_usuario,
                ativo:res.data.usu_ativo,
                cpf:res.data.uf_cpf
            })
        })
    }
    render() {
        return (
            <>
             <h1 className="view-profile">View Profile</h1>
            <div className="profile1">
            <div className="profile-div">
                <p className="profile-field">Primeiro Nome</p>
                <p className="profile-info">{this.state.primeiroNome}</p>
            </div>
            
            <div className="profile-div">
                <p className="profile-field">Sobre Nome</p>
                <p className="profile-info">{this.state.sobreNome}</p>
            </div>

            <div className="profile-div">
                <p className="profile-field">Usuario</p>
                <p className="profile-info">{this.state.usuario}</p>
            </div>

            <div className="profile-div">
                <p className="profile-field">Email</p>
                <p className="profile-info">{this.state.email}</p>
            </div>

            <div className="profile-div">
                <p className="profile-field">Data Nascimento</p>
                <p className="profile-info">{this.state.dataNascimento}</p>
            </div>

            <div className="profile-div">
                <p className="profile-field">CPF</p>
                <p className="profile-info">{this.state.cpf}</p>
            </div>
            
            <div className="profile-div">
                <p className="profile-field">Rua</p>
                <p className="profile-info">{this.state.rua}</p>
            </div>

            <div className="profile-div">
                <p className="profile-field">Numero</p>
                <p className="profile-info">{this.state.numero}</p>
            </div>

            <div className="profile-div">
                <p className="profile-field">Complemento</p>
                <p className="profile-info">{this.state.complemento}</p>
            </div>

            <div className="profile-div">
                <p className="profile-field">CEP</p>
                <p className="profile-info">{this.state.cep}</p>
            </div>

            <div className="profile-div">
                <p className="profile-field">Cidade</p>
                <p className="profile-info">{this.state.cidade}</p>
            </div>

            <div className="profile-div">
                <p className="profile-field">Estado</p>
                <p className="profile-info">{this.state.estado}</p>
            </div>
        </div>

            <div className="btn-edit-div">
                <Link to="/pessoa_fisica_edit" className="btn">Edit Profile</Link>
                <Link to="/pessoa_fisica_edit" className="btnDelete">Delete Profile</Link>                
            </div>
            </>

        )
    }
}
