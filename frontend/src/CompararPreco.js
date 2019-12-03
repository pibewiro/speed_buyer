import React, { Component } from 'react'
import axios from "axios"
import jwtDecode from "jwt-decode"

export default class CompararPreco extends Component {

    
    constructor()
    {
        super()

        this.state = {
            items:[],
            produtos:[],
            idProduto:"",
            favoritos:[],
            idUsuario:jwtDecode(localStorage.getItem('jwtToken')).id_usuario,
            yellowColor:"",
            fav2:[]
        }
    }

    componentDidMount()
    {
        axios.get(`lojas/get_nome_produtos/${this.props.location.state.idCategoria}`)
        .then(res=>this.setState({produtos:res.data}))
        
        this.favoritoReload()
    }

    handleProduto = async (e) => {
        await this.setState({idProduto:e.target.value})

        await axios.get(`lojas/comparar_precos/${this.state.idProduto}`)
        .then(res=>this.setState({items:res.data}))
    }

    handleFavorito = (idItem, num) => {
            console.log(num)

        if(num === 0)
        {
            axios.post(`lojas/favoritos`, {idItem, idUsuario:this.state.idUsuario})
            .then(()=>this.favoritoReload())
            .then(res=>this.setState({yellowColor:"yellow"}))
        }

        else if(num === 1)
        {
            axios.post(`lojas/del_favoritos`, {idItem, idUsuario:this.state.idUsuario})
            .then(()=>this.favoritoReload())
            .then(res=>this.setState({yellowColor:"white"}))
        }
    }

    favoritoReload = () => {
        axios.get(`lojas/get_favoritos/${this.state.idUsuario}`)
        .then(res=>this.setState({favoritos:res.data}))
    }


    render() {

        let arr = []
        this.state.favoritos.map(res=>arr.push(res.fav_id_item))

        return (
            <div className="comparar-content">
                <div className="comparar-select">
                    <label htmlFor="">Produto:</label>
                    <select onChange={this.handleProduto}>
                        <option value=""></option>
                        {this.state.produtos.map(res=>(
                            <option value={res.pro_id_produto}>{res.pro_nome}</option>
                        ))}
                    </select>
                </div>

                <div className="comparar-items">
                    {this.state.items.map(res=>(
                        <div className="comparar-card">
                            <img src={`/images/${res.it_foto}`} alt=""/>
                            <h3>{res.it_nome}</h3>
                            <p>R$ {res.it_preco.toFixed(2)}</p>
                            {arr.includes(res.item_id) ? <i style={{color:this.state.yellowColor}} id="fav" className="fas fa-star yellow-star" onClick={this.handleFavorito.bind(this, res.item_id, 1)}></i> : <i style={{color:this.state.yellowColor}} className="fas fa-star" onClick={this.handleFavorito.bind(this, res.item_id, 0)}></i>}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
