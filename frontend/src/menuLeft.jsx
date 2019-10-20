import React, { Component } from 'react'
import logoImage from "./images/logo.jpg";
import {Link} from "react-router-dom"


export default class menuLeft extends Component {
    render() {
    return (
        <div className="menu-left">
            <img src={logoImage} alt=""/>
            <ul>
                <Link to="/profile"><li><i class="fas fa-id-badge"></i><p>Meu Profile</p></li></Link>
                <Link to="stores"><li><i class="fas fa-store"></i><p>Stores</p></li></Link>
                <li><i class="fas fa-shopping-cart"></i><p>Categorias</p></li>
                <li><i class="fas fa-sort-numeric-up-alt"></i><p>Minha Lista</p></li>
                <li><i class="fas fa-sort-numeric-up-alt"></i><p>Meu Carrinho</p></li>
                <li><i class="fas fa-sort-numeric-up-alt"></i><p>Promoçoes</p></li>
                <li><i class="fas fa-sort-numeric-up-alt"></i><p>Favoritos</p></li>
                <li><i class="fas fa-sort-numeric-up-alt"></i><p>Ajuda Central</p></li>
            </ul>
        </div>

    )}
}
