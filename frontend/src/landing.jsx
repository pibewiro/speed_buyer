import {Link} from "react-router-dom";
import Footer from "./footer";
import Navbar from './navbar';



import React, { Component } from 'react'

export default class landing extends Component {
    componentDidMount()
    {
        if("jwtToken" in localStorage === true)
        {
            this.props.history.push("/stores")
        }
    }
    
    render() {

        return (
            <>
            <div id="showcase">
               <Navbar />
               <div className="showcase-content">
                    <h1>BBBBBBBBBBuy Foods From The Comfort of Your House</h1>
                    <p>A new way to deliver food</p>
                    <div>
                        <Link to="/signin" className="btn" >Sign-In</Link>
                        <Link to="/signup" className="btn" >Sign-Up</Link>
                    </div>
                </div> 
                <Footer />
            </div>
            </>
    
        )
    
    }
}
