import React, { Component } from 'react'
import logoImage from "./images/logo.jpg";
import {Link} from "react-router-dom"


export default class menuLeft extends Component {
    render() {
    return (
        <div className="menu-left">
            <img src={logoImage} alt=""/>
            <ul>
                {/* <Link to="/account"><li><i className="fas fa-user-circle"></i><p>Account</p></li></Link> */}
                <Link to="/profile"><li><i class="fas fa-id-badge"></i><p>Profile</p></li></Link>
                <Link to="stores"><li><i class="fas fa-store"></i><p>Stores</p></li></Link>
                <li><i class="fas fa-shopping-cart"></i><p>Items</p></li>
                <li><i class="fas fa-sort-numeric-up-alt"></i><p>Statistics</p></li>
            </ul>
        </div>

    )}
}
