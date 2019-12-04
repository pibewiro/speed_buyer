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
                    <h1>SpeedBuyer</h1>
                    <div>
                        <Link to="/signin" className="btn" >Login</Link>
                        <Link to="/signup" className="btn" >Cadastrar</Link>
                    </div>
                </div> 
                <Footer />
            </div>
            </>
    
        )
    
    }
}
