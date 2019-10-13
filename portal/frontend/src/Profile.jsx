import React, { Component } from 'react'
import {Link} from "react-router-dom"
import jwt_decode from 'jwt-decode';

export default class Profile extends Component {


        constructor()
        {
                super();
                this.state = {
                        primeiroNome: "jwtToken" in localStorage ? jwt_decode(localStorage.getItem("jwtToken")).primeiroNome : "",
                        sobreNome: "jwtToken" in localStorage ? jwt_decode(localStorage.getItem("jwtToken")).sobreNome : "",
                        ativo: "jwtToken" in localStorage ? jwt_decode(localStorage.getItem("jwtToken")).ativo : ""
                }
        }


        componentDidMount()
        {
            if("jwtToken" in localStorage === false)
            {
                this.props.history.push("/");
            }
        }



        render() {

                const profile0 = (<Link to="/choose_profile" className="btn crt-prf-btn">Create Profile</Link>)
                const profile1 = (
                        <div>
                            <h2>Profile</h2>    
                        </div>
                )

                return(
                <div className="child">
                        <h1>{this.state.primeiroNome.toUpperCase()} {this.state.sobreNome.toUpperCase()}</h1>
                        {this.state.ativo === 1 ? profile1 : profile0}
                </div>
             )

        }
 
}

