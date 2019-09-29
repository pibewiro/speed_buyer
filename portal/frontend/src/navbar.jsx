import React, { Component } from 'react'
import logoImage from "./images/logo.jpg";
import {Link} from "react-router-dom"

export default class navbar extends Component {

    constructor()
    {
        super()

        this.state = {
            showMenu:false
        }
    }

    toggleMenu = async e => {
       await  this.setState({showMenu:!this.state.showMenu})

        // if(this.state.showMenu)
        // {
        //     document.querySelector(".showcase-content").style.height = "80%";
        // } 

        // else if(!this.state.showMenu)
        // {
        //     document.querySelector(".showcase-content").style.height = "95%";
        // }
    }
    render() {
        return (
            <div>
                <nav id="navbar">
                    <div>
                        <img src={logoImage} alt=""/>
                        <Link to="/" className="nav-text"><h1><span class="primary-text">Speed</span> Buyer</h1></Link>
                    </div>

                    <ul>
                        <li>
                            <Link to="/" href="#">Home</Link>
                        </li>

                        <li>
                            <Link to="/signin" href="#">Sign-in</Link>
                        </li>

                        <li>
                            <Link to="/account" href="#">About Us</Link>
                        </li>

                        <li>
                            <Link to="/" href="#">Contact Us</Link>
                        </li>
                    </ul>
                    <div onClick={this.toggleMenu} className="menuToggle"><p>&#9776;</p></div>
                </nav>
                {this.state.showMenu ?
                    <div id="toogleItems">
                        <ul>
                            <li>
                                <Link to="/" href="#">Home</Link>
                            </li>

                            <li>
                                <Link to="/signin" href="#">Sign-in</Link>
                            </li>

                            <li>
                                <Link to="/" href="#">About Us</Link>
                            </li>

                            <li>
                                <Link to="/" href="#">Contact Us</Link>
                            </li>
                        </ul>
                    </div> : null
                }
            </div>
        )
    }
}
