import React, { Component } from 'react'
import Footer from "./footer";
import MenuLeft from "./menuLeft";
import {Link} from "react-router-dom";
import setAuthToken from './setAuthToken';

export default class Dashboard extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { 
    //       activeIndex: props,
    //     };
    //   }
      
    componentDidMount()
    {
        //console.log(this.props)
    }

    logout = e => {
        localStorage.removeItem("jwtToken");
        setAuthToken(false);
        window.location.href = "/";
    }

    render() {
        let dashtext = this.props.children.props.location.pathname.slice(1).split("/")[0];
        dashtext = dashtext.charAt(0).toUpperCase() + dashtext.slice(1);

        if(dashtext === 'ProfilePJ') dashtext = 'Pessoa Juridico';
        if(dashtext === 'ProfilePF') dashtext = 'Pessoa Fisica';
        if(dashtext === 'Pessoa_fisica_edit') dashtext = 'Editar Pessoa Fisica';
        if(dashtext === 'Pessoa_juridica_edit') dashtext = 'Editar Pessoa Juridica';
        if(dashtext === 'Choose_profile') dashtext = 'Choose Profile';
        if(dashtext === 'Pessoa_fisica') dashtext = 'Pessoa Fisica';
        if(dashtext === 'Pessoa_juridica') dashtext = 'Pessoa Juridica';
        if(dashtext === 'Profile_admin') dashtext = 'Profile Administrador';
        if(dashtext === 'Add_stores') dashtext = 'Adicionar Lojas';
        if(dashtext === 'Profile_entregador') dashtext = 'Profile Entregador';
        if(dashtext === 'Entregador_edit') dashtext = 'Entregador';


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
