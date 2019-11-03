import React, { Component } from 'react'
import logoImage from "./images/logo.jpg";
import {Link} from "react-router-dom"
import jwtDecode from "jwt-decode"


export default class menuLeft extends Component {

    constructor()
    {
        super()

        this.state = {
            ativo:jwtDecode(localStorage.getItem("jwtToken")).ativo
        }
    }
    render() {

    return (
        <div className="menu-left">
            <img src={logoImage} alt=""/>
            <ul>
                <Link to="/profile"><li><i class="fas fa-id-badge"></i><p>Meu Profile</p></li></Link>
                {this.state.ativo === 3 ? 
                    <>
                    <Link to="/add_stores"><li><i class="fas fa-store"></i><p>Add Stores</p></li></Link>
                    <Link to="/view_users"><li><i class="fas fa-store"></i><p>View Stores</p></li></Link>
                    <Link to="/add_itens"><li><i class="fas fa-store"></i><p>Add Items</p></li></Link>
                    </>
                : null }

                {this.state.ativo === 1 || this.state.ativo === 2 ?
                <>
                <Link to="/mercados"><li><i class="fas fa-store"></i><p>Mercados</p></li></Link>
                <li><i class="fas fa-list"></i><p>Minha Lista</p></li>
                <li><i class="fas fa-shopping-cart"></i><p>Meu Carrinho</p></li>
                <li><i class="fas fa-tags"></i><p>Promoçoes</p></li>
                <li><i class="far fa-star"></i><p>Favoritos</p></li>
                <li><i class="fas fa-question"></i><p>Ajuda Central</p></li></> : null}

                {this.state.ativo === 4 ? 
                    <>
                    <Link to="/entregas"><li><i class="fas fa-store"></i><p>Pedidos</p></li></Link>
                    <Link to="/entregas"><li><i class="fas fa-store"></i><p>Entregas</p></li></Link>
                    </>
                : null}
            </ul>
        </div>

    )}
}
