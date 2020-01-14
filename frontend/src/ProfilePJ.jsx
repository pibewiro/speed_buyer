import React, { Component } from 'react'
import axios from 'axios'
import jwtDecode from "jwt-decode";
import {Link} from "react-router-dom"
import Spinner from "./Spinner"

export default class ProfilePJ extends Component {

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
            email:"",
            nomeUsuario:"",
            idUsuario:jwtDecode(localStorage.getItem("jwtToken")).id_usuario,
            loading:false
        }
    }

    componentDidMount()
    {
        this.setState({loading:true})
        axios.get(`profile/get_pessoa_juridico/${this.state.idUsuario}`)
        .then(res=>{
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
                nomeUsuario:res.data.nome_usuario,
                loading:false
            })
        })
    }

    render() {
        return (
        <>
        {this.state.loading ? <Spinner /> :<> <h1 className="view-profile">View Profile</h1>
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
                <p className="profile-field">Email</p>
                <p className="profile-info">{this.state.email}</p>
            </div>

            <div className="profile-div">
                <p className="profile-field">Usuario</p>
                <p className="profile-info">{this.state.nomeUsuario}</p>
            </div>

            <div className="profile-div">
                <p className="profile-field">Nome Fantasia</p>
                <p className="profile-info">{this.state.nomeFantasia}</p>
            </div>

            <div className="profile-div">
                <p className="profile-field">Razao Social</p>
                <p className="profile-info">{this.state.razaoSocial}</p>
            </div>
            
            <div className="profile-div">
                <p className="profile-field">Inscrição Municipal</p>
                <p className="profile-info">{this.state.inscricaoMun}</p>
            </div>

            <div className="profile-div">
                <p className="profile-field">Inscrição Estadual</p>
                <p className="profile-info">{this.state.inscricaoMun}</p>
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

            <div className="profile-div">
                <p className="profile-field">CNPJ</p>
                <p className="profile-info">{this.state.cnpj}</p>
            </div>
        </div>
        <div className="btn-edit-div">
                <Link to="/pessoa_juridica_edit" className="btn">Edit Profile</Link>                
                <Link to="/pessoa_juridica_edit" className="btnDelete">Delete Profile</Link>                
            </div>
        
        </>}
        </>
        )
    }
}
