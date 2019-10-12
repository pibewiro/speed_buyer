import React, { Component } from 'react'
import {Link} from "react-router-dom"
import jwt_decode from 'jwt-decode';
 

export default class Profile extends Component {


        constructor()
        {
                super();
                this.state = {
                    token: "jwtToken" in localStorage ? jwt_decode(localStorage.getItem("jwtToken")) : window.location.href = "/signin"
                }
        }


        render() {

                return(
                <div className="child">
                <h1>{this.state.token.primeiroNome.toUpperCase()} {this.state.token.sobreNome.toUpperCase()}</h1>
                <Link to="/choose_profile" className="btn crt-prf-btn">Create Profile</Link>
                </div>
             )

        }
 
}

