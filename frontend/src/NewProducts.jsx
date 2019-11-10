import React, { Component } from 'react'
import "./novoProduto.css";
import axios from 'axios'
import Swal from 'sweetalert2';

export default class NewProducts extends Component {

    constructor()
    {
        super()

        this.state = {
            categorias:[],
            idCategoria:"",
            nomeProduto:"",
            descricao:"",
            errors:[]
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

    salvarNovoProduto = (e) => {

        e.preventDefault()

        const novoProduto = {
            nomeProduto:this.state.nomeProduto,
            idCategoria:this.state.idCategoria,
            descricao:this.state.descricao
        }

        axios.post("/admin/post_novo_produto", novoProduto)
        .then((res)=>{
            Swal.fire({
                title:"Created New Market",
                text:"Um novo Mercado foi criado", 
                type:"success",
                confirmButtonColor: '#00283D',
            })
            this.props.history.push("/profile");
        })
        .catch(err=>this.setState({errors:err.response.data}))
    }

    render() {
        const {errors} = this.state;
        
        return (
            <div id="new-product">
                <h1 className="big-heading">Adicionar Novo Produto</h1>
                <form className="new-product-form">
                    <div className="form-group">
                        <label htmlFor="">Nome Produto</label>
                        <input type="text" onChange={this.changeNomeProduto} value={this.state.nomeProduto} />
                        <small>{errors.nomeProduto}</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Categoria</label>
                        <select onChange={this.changeCategoria} value={this.state.idCategoria}>
                            <option></option>
                            {this.state.categorias.map(res=>(
                                <option value={res.cat_id_categoria}>{res.cat_nome}</option>
                            ))}
                        </select>
                        <small>{errors.idCategoria}</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Descrição</label>
                        <textarea cols="30" rows="10" onChange={this.changeDes} value={this.state.descricao}></textarea>
                    </div>
                    <div className="btn-div">
                        <button onClick={this.salvarNovoProduto} className="btn">Enter</button>
                    </div>
                </form>
            </div>
        )
    }
}
