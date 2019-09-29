import React, { Component } from 'react'
import logoImage from "./images/logo.jpg";
import Navbar from './navbar';
import Footer from './footer';


export default class signin extends Component {

    constructor()
    {
        super()

        this.state = {
            email:"",
            password:""
        }
    }

    changeEmail = (e) => this.setState({email:e.target.value})
    changePassword = (e) => this.setState({password:e.target.value})
    enterClick = e => {
        this.props.history.push("/account")
    }
    render() {
        
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <div id="form-content">
                <h1 className="big-heading">Sign In</h1>
                <img src={logoImage} alt=""/>
               <form>
                   <div className="form-group">
                       <label htmlFor="">Username</label>
                       <input type="text" onChange={this.changeEmail} value={this.state.email} />
                   </div>

                   <div className="form-group">
                       <label htmlFor="">Email</label>
                       <input type="password" onChange={this.changePassword} value={this.state.password} />
                   </div>

                   <div className="form-group-btn">
                        <button className="btn" onClick={this.enterClick}>Enter</button>
                   </div>
               </form>
            </div>  

                <Footer />
            </div>

        )
    }
}
