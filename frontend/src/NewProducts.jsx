import React, { Component } from 'react'
import "./novoProduto.css";
import axios from 'axios'

export default class NewProducts extends Component {

    constructor()
    {
        super()

        this.state = {
            categorias:[],
            idCategoria:"",
            nomeProduto:"",
            descricao:""
        }
    }

    componentDidMount()
    {
        axios.get("admin/get_categorias")
        .then(res=>this.setState({categorias:res.data}))
    }

    changeCategoria = e => this.setState({idCategoria:e.target.value})
    changeDes = e => this.setState({descricao:e.target.value})
    changeNomeProduto = e => this.setState({nomeProduto:e.target.value})

    render() {
        return (
            <div id="new-product">
                <h1 className="big-heading">Adicionar Novo Produto</h1>
                <form className="new-product-form">
                    <div className="form-group">
                        <label htmlFor="">Nome Produto</label>
                        <input type="text" onChange={this.changeNomeProduto} value={this.state.nomeProduto} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Categoria</label>
                        <select onChange={this.changeCategoria} value={this.state.idCategoria}>
                            <option></option>
                            {this.state.categorias.map(res=>(
                                <option value={res.cat_id_categoria}>{res.cat_nome}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Descrição</label>
                        <textarea cols="30" rows="10" onChange={this.changeDes} value={this.state.descricao}></textarea>
                    </div>
                    <div className="btn-div">
                        <button className="btn">Enter</button>
                    </div>
                </form>
            </div>
        )
    }
}
