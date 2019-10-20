import React, { Component } from 'react'
import logoImage from "./images/logo.jpg";
import Navbar from './navbar';
import Footer from './footer';
import axios from 'axios';
import setAuthToken from "./setAuthToken"
import JWTDecode from "jwt-decode"

export default class signin extends Component {

    constructor()
    {
        super()

        this.state = {
            email:"",
            senha:"",
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

    signin = e => {
        e.preventDefault();
        const loginUser = {
            senha:this.state.senha,
            email:this.state.email
        }

        axios.post("/user/login_user", loginUser)
        .then((res)=>{
            const {token} = res.data;
            localStorage.setItem("jwtToken", token);
            setAuthToken(token)

            if(JWTDecode(localStorage.getItem("jwtToken")).ativo === 2)
            {
                this.props.history.push("/profilePJ")
            }

            if(JWTDecode(localStorage.getItem("jwtToken")).ativo === 1)
            {
                this.props.history.push("/profilePF")
            }

            else
            {
                this.props.history.push("/profile")
            }
        })
        .catch(err=>this.setState({errors:err.response.data}))
    }

    render() {

        const {errors} = this.state;

        

        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <div id="form-content">
                <h1 className="big-heading">Sign In Administrador</h1>
                <img src={logoImage} alt=""/>
               <form>
                   <div className="form-group">
                       <label htmlFor="">Email</label>
                       <input type="text" onChange={this.changeEmail} value={this.state.email} />
                       <small className="errorMessage">{errors.email}</small>
                   </div>

                   <div className="form-group">
                       <label htmlFor="">Senha</label>
                       <input type="password" onChange={this.changeSenha} value={this.state.senha} />
                       <small className="errorMessage">{errors.senha}</small>
                   </div>

                   <div className="form-group-btn">
                        <button className="btn" onClick={this.signin}>Enter</button>
                   </div>
               </form>
            </div>  

                <Footer />
            </div>

        )
    }
}