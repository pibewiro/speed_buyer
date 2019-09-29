import React, { Component } from 'react'
import Footer from "./footer";
import MenuLeft from "./menuLeft";
import {Link} from "react-router-dom";

export default class Dashboard extends Component {

    // constructor(props) {
    //     super(props);
    //     // this.state = { 
    //     //   activeIndex: 0,
    //     // };
    //   }
      

    logout = e => {
        window.location.href = "/";
    }

    render() {
        let dashtext = this.props.children.props.location.pathname.slice(1).split("/")[0];
        dashtext = dashtext.charAt(0).toUpperCase() + dashtext.slice(1);
        return (
                    <div id="dashboard">
                        <div className="dash-content">
                            <MenuLeft />
                            <div className="dash-body">
                                <div className="dash-header">
                                <h2>{dashtext}</h2>
                                <Link onClick={this.logout}><i class="fas fa-sign-out-alt"></i> Log Out</Link>
                                </div>
                                {this.props.children}
                                <Footer />
                            </div>
                        </div>
                    </div>
        )
    }
}
