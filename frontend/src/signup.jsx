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
            usuario:"",
            errors:[]
        }
    }

    componentDidMount()
    {
        if("jwtToken" in localStorage)
        {
            this.props.history.push("/profile")
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

        axios.post("/user/new_user", newUser)
        .then(()=>{
           this.props.history.push("/signin")
        })
        .catch(err=>this.setState({errors:err.response.data}))
        
    }
    render() {

        const {errors} = this.state;
        return (
            <div id="signup">
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
                        <small className="errorMessage">{errors.primeiroNome}</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Sobre Nome</label>
                        <input type="text" onChange={this.changeSobreNome} value={this.state.sobreNome} />
                        <small className="errorMessage">{errors.sobreNome}</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Usuario</label>
                        <input type="text" onChange={this.changeUsuario} value={this.state.usuario} />
                        <small className="errorMessage">{errors.usuario}</small>
                    </div>

                   <div className="form-group">
                       <label htmlFor="">Senha</label>
                       <input type="password" onChange={this.changeSenha} value={this.state.senha} />
                       <small className="errorMessage">{errors.senha}</small>
                   </div>

                   <div className="form-group">
                       <label htmlFor="">Email</label>
                       <input type="text" onChange={this.changeEmail} value={this.state.email} />
                       <small className="errorMessage">{errors.email}</small>
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
