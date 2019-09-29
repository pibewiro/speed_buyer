import React, { Component } from 'react'
import logoImage from "./images/logo.jpg";
import Navbar from './navbar';
import Footer from './footer';
import axios from "axios";


export default class signin extends Component {

    constructor()
    {
        super()

        this.state = {
            email:"",
            senha:"",
            primeiroNome:"",
            sobreNome:"",
            usuario:""
        }
    }

    changeEmail = (e) => this.setState({email:e.target.value})
    changeSenha = (e) => this.setState({senha:e.target.value})
    changePrimeiroNome = (e) => this.setState({primeiroNome:e.target.value})
    changeSobreNome = (e) => this.setState({sobreNome:e.target.value})
    changeEndereco = (e) => this.setState({endereco:e.target.value})
    changeUsuario = (e) => this.setState({usuario:e.target.value})


    signUp = e => {

        e.preventDefault();

        const newUser = {
            email:this.state.email,
            senha:this.state.senha,
            primeiroNome:this.state.primeiroNome,
            sobreNome:this.state.sobreNome,
            usuario:this.state.usuario
        }

        console.log(newUser)

        axios.post("/user/new_user", newUser)
        this.props.history.push("/dashboard")
    }
    render() {
        
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <div id="form-content">
                <h1 className="big-heading">Sign Up</h1>
                <img src={logoImage} alt=""/>
               <form>
                    <div className="form-group">
                        <label htmlFor="">Primeiro Name</label>
                        <input type="text" onChange={this.changePrimeiroNome} value={this.state.primeiroNome} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Sobre Nome</label>
                        <input type="text" onChange={this.changeSobreNome} value={this.state.sobreNome} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Usuario</label>
                        <input type="text" onChange={this.changeUsuario} value={this.state.usuario} />
                    </div>

                   <div className="form-group">
                       <label htmlFor="">Senha</label>
                       <input type="password" onChange={this.changeSenha} value={this.state.senha} />
                   </div>

                   <div className="form-group">
                       <label htmlFor="">Email</label>
                       <input type="text" onChange={this.changeEmail} value={this.state.email} />
                   </div>

                   <div className="form-group-btn">
                        <button className="btn" onClick={this.signUp}>Sign Up</button>
                   </div>
               </form>
            </div>  

                <Footer />
            </div>

        )
    }
}
