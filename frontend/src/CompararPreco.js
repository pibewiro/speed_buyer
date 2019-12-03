import React, { Component } from 'react'
import axios from "axios"

export default class CompararPreco extends Component {

    
    constructor()
    {
        super()

        this.state = {
            items:[],
            produtos:[],
            idProduto:""
        }
    }

    componentDidMount()
    {
        axios.get(`lojas/get_nome_produtos`)
        .then(res=>this.setState({produtos:res.data}))
    }

    handleProduto = async (e) => {
        await this.setState({idProduto:e.target.value})

        await axios.get(`lojas/comparar_precos/${this.state.idProduto}`)
        .then(res=>this.setState({items:res.data}))
    }



    render() {
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
                        <p>R${res.it_preco.toFixed(2)}</p>
                        <i className="fas fa-star"></i>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
