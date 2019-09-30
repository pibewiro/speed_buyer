import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Footer from "./footer";


export default class account extends Component {
    
    constructor(props)
    {
        super(props)
    }

    componentDidMount()
    {
        if ("jwtToken" in localStorage) {
        }

        else
        {
            this.props.history.push("/signIn");
        }
    }

    render() {

        return (
        <div class="child">
            <Link to="/signup" className="btn crt-prf-btn">Create Account</Link>
        </div>
        )
    }
}
