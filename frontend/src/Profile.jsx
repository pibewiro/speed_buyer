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
                }
        }


        componentDidMount()
        {
            if("jwtToken" in localStorage === false)
            {
                this.props.history.push("/");
            }

            if(jwt_decode(localStorage.getItem("jwtToken")).ativo === 2)
            {
                this.props.history.push("/profilePJ"); 
            }

            if(jwt_decode(localStorage.getItem("jwtToken")).ativo === 1)
            {
                this.props.history.push("/profilePF"); 
            }

            if(jwt_decode(localStorage.getItem("jwtToken")).ativo === 4)
            {
                this.props.history.push("/profile_entregador"); 
            }

            if(jwt_decode(localStorage.getItem("jwtToken")).ativo === 3)
            {
                this.props.history.push("/profile_admin"); 
            }
        }



        render() {
               
                return(
                        <div className="child">
                            <h1>
                             {this.state.primeiroNome.toUpperCase()} {this.state.sobreNome.toUpperCase()}
                           </h1>     
                                <div className="child">
                                   <Link to="/choose_profile" className="btn crt-prf-btn">Create Profile</Link>
                                </div>
                        </div>
             )

        }
 
}

