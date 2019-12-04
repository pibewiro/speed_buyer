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
                <Link to="/profile"><li><i className="fas fa-id-badge"></i><p>Meu Perfil</p></li></Link>
                {this.state.ativo === 3 ? 
                    <>
                    <Link to="/new_store"><li><i className="fas fa-store"></i><p>Novo Mercado</p></li></Link>
                    <Link to="/add_stores"><li><i className="fas fa-store"></i><p>Adicionar Mercado</p></li></Link>
                    <Link to="/novo_produtos"><li><i className="fas fa-store"></i><p>Adicionar Novo Produtos</p></li></Link>
                    <Link to="/add_itens"><li><i className="fas fa-store"></i><p>AAdicionardd Itens</p></li></Link>
                    <Link to="/promocoes"><li><i className="fas fa-store"></i><p>Add Promocoes</p></li></Link>
                    </>
                : null }

                {this.state.ativo === 1 || this.state.ativo === 2 ?
                <>
                <Link to="/mercados"><li><i className="fas fa-store"></i><p>Mercados</p></li></Link>
                <li><i className="fas fa-list"></i><p>Minha Lista</p></li>
                <li><i className="fas fa-shopping-cart"></i><p>Meu Carrinho</p></li>
                <Link to="/favoritos"><li><i className="far fa-star"></i><p>Favoritos</p></li></Link>
                <Link to="/comparar_categorias"><li><i className="fas fa-store"></i><p>Comparar Preco</p></li></Link>
                <Link to="/historico"><li><i className="fas fa-store"></i><p>Historico</p></li></Link>
                <Link to="/promocoes"><li><i className="fas fa-store"></i><p>Promocoes</p></li></Link>
                <li><i className="fas fa-question"></i><p>Ajuda Central</p></li></> 
                : null}

                {this.state.ativo === 4 ? 
                    <>
                    <Link to="/entregas"><li><i className="fas fa-store"></i><p>Pedidos</p></li></Link>
                    <Link to="/entregas"><li><i className="fas fa-store"></i><p>Entregas</p></li></Link>
                    </>
                : null}
            </ul>
        </div>

    )}
}
