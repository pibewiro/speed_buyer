import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Navbar from "./navbar"
import Footer from "./footer"


export default class signin extends Component {

    render() {
        return (
            <>
            <div>
                <Navbar />
            </div>
            <div id="profile">
                <h1 className="big-heading">Choose a Profile</h1>
                <div>
                    <Link to="/pessoa_fisica" class="profile-box">Usuario Fisico</Link>
                    <Link to="/pessoa_juridica" class="profile-box">Usuario Juridica</Link>
                </div>
            </div>
            <Footer />
            </>
        )
    }
}
