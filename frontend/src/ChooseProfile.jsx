import React, { Component } from 'react'
import {Link} from "react-router-dom"
import jwtDecode from "jwt-decode"



export default class signin extends Component {

    componentDidMount()
    {
        if("jwtToken" in localStorage === false)
        {
            this.props.history.push("/")
        }

        if(jwtDecode(localStorage.getItem("jwtToken")).ativo > 0)
        {
            this.props.history.push("/profile")
        }
    }

    render() {
        return (
            <div className="chooseProfile">
            <h1 className="big-heading">Choose a Profile</h1>
            <div>
                <Link to="/pessoa_fisica" class="profile-box">Usuario Fisico</Link>
                <Link to="/pessoa_juridica" class="profile-box">Usuario Juridica</Link>
                <Link to="/entregador" class="profile-box">Entregador</Link>
            </div>
        </div>
        )
    }
}
