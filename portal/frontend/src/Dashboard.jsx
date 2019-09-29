import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Footer from "./footer";


export default class Dashboard extends Component {
    render() {
        return (
        <>
        <Link to="/choose_profile" className="btn crt-prf-btn">Create Profile</Link>
        </>
        )
    }
}
