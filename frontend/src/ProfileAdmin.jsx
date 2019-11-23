import React, { Component } from 'react'
import axios from 'axios'
import jwtDecode from "jwt-decode";
import {Link} from "react-router-dom"
//import moment from "moment"

export default class ProfileAdmin extends Component {

    constructor()
    {
        super()
        
        this.state = {
            primeiroNome:"",
            sobreNome:"",
            cpf:"",
            idUsuario:jwtDecode(localStorage.getItem("jwtToken")).id_usuario,
            email:"",
            ativo:null,
        }
    }

    componentDidMount()
    {
        axios.get(`profile/get_admin/${this.state.idUsuario}`)
        .then(res=>{
            console.log(res.data)
            this.setState({
                primeiroNome:res.data.primeiro_nome,
                sobreNome:res.data.sobre_nome,
            })
        })
    }
    render() {
        return (
            <div id="profile-admin">
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
        </div>

            <div className="btn-edit-div">
                <Link to="/pessoa_fisica_edit" className="btn">Edit Profile</Link>
            </div>
            </div>

        )
    }
}
