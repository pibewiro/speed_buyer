import React, { Component } from 'react'
import {Link} from "react-router-dom"



export default class signin extends Component {

    componentDidMount()
    {
        if("jwtToken" in localStorage === false)
        {
            window.location.href = "/"
        }
    }

    render() {
        return (
            <div className="chooseProfile">
            <h1 className="big-heading">Choose a Profile</h1>
            <div>
                <Link to="/pessoa_fisica" class="profile-box">Usuario Fisico</Link>
                <Link to="/pessoa_juridica" class="profile-box">Usuario Juridica</Link>
            </div>
        </div>
        )
    }
}
