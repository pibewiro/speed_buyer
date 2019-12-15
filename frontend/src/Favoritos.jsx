import React, { Component } from 'react'
import axios from 'axios'
import jwtDecode from "jwt-decode"

export default class Favoritos extends Component {

    constructor()
    {
        super()

        this.state = {
            favoritos:[],
            idUsuario:jwtDecode(localStorage.getItem('jwtToken')).id_usuario,
        }
    }

    componentDidMount()
    {
        axios.get(`lojas/get_favoritos_pagina/${this.state.idUsuario}/asc`)
        .then(res=>this.setState({favoritos:res.data}))
    }

    handleFavorito = (idItem, num) => {
            console.log(idItem, num)

        if(num === 0)
        {
            axios.post(`lojas/favoritos`, {idItem, idUsuario:this.state.idUsuario})
            .then(()=>this.favoritoReload())
        }

        else if(num === 1)
        {
            axios.post(`lojas/del_favoritos`, {idItem, idUsuario:this.state.idUsuario})
            .then(()=>this.favoritoReload())
        }
    }

    favoritoReload = () => {
        axios.get(`lojas/get_favoritos_pagina/${this.state.idUsuario}/asc`)
        .then(res=>this.setState({favoritos:res.data}))
    }

    changeFiltro = async (e) => {
        await this.setState({filtro:e.target.value})
        await axios.get(`lojas/get_favoritos_pagina/${this.state.idUsuario}/${this.state.filtro}`)
        .then(res=>this.setState({favoritos:res.data}))
    }


    render() {


        let arr = []
        this.state.favoritos.map(res=>arr.push(res.fav_id_item))

        return (
            <div className="favoritios">
                  <div className="comparar-content">
                <div className="comparar-filtro">
                    <div className="comparar-filtro-preco">
                        <label htmlFor="">Filtro: </label>
                        <select onChange={this.changeFiltro}>
                            <option></option>
                            <option value="asc">Preco Mais Barato</option>
                            <option value="desc">Preco Mais Caro</option>
                        </select>
                    </div>
                </div>


                <div className="comparar-items">
                    {this.state.favoritos.map(res=>(
                        <div className="comparar-card">
                            <img src={`/images/${res.it_foto}`} alt=""/>
                            <h3>{res.it_nome}</h3>
                            <p>R$ {res.it_preco.toFixed(2).toString().replace(".", ",")}</p>
                            {arr.includes(res.item_id) ? <i style={{color:"yellow"}} id="fav" className="fas fa-star" onClick={this.handleFavorito.bind(this, res.item_id, 1)}></i> : <i style={{color:"white"}} className="fas fa-star" onClick={this.handleFavorito.bind(this, res.item_id, 0)}></i>}
                        </div>
                    ))}
                </div>
            </div>

            </div>
        )
    }
}
