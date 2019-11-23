import React, { Component } from 'react'
import "./addItens.css";
import axios from 'axios'
import Swal from 'sweetalert2';

export default class AddItems extends Component {

    constructor()
    {
        super()

        this.state = {
            idProduto:"",
            idMercado:"",
            nomeIten:"",
            preco:"",
            quantidade:"",
            image:null,
            produtos:[],
            mercados:[],
            errors:[]
        }
    }

    componentDidMount()
    {
        axios.get("admin/get_produtos")
        .then(res=>this.setState({produtos:res.data}))

        axios.get("admin/get_mercados")
        .then(res=>this.setState({mercados:res.data}))
    }

    changeProduto = e => this.setState({idProduto:e.target.value})
    changeMercado = e => this.setState({idMercado:e.target.value})
    changeNomeIten = e => this.setState({nomeIten:e.target.value})
    changePreco = e => this.setState({preco:e.target.value})
    changeImage = e => this.setState({image:e.target.files})

    salvarNovoProduto = (e) => {

        e.preventDefault()

        const novoItem = {
            idProduto:this.state.idProduto,
            idMercado:this.state.idMercado,
            nomeIten:this.state.nomeIten,
            preco:this.state.preco,
            image:this.state.image !== null ? this.state.image[0].name : null,
            imageType:this.state.image !== null ? this.state.image[0].type : null
        }

        const form = new FormData();

        if(this.state.image !== null)
        {
            form.append("files", this.state.image[0], this.state.image[0].name)
        }        

        axios.post("/admin/add_novo_item", novoItem)
        .then((res)=>{
            axios.post("/admin/upload", form)
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
        let i = 0;

        return (
            <div id="add-product">
                <h1 className="big-heading">Adicionar Novo Iten</h1>
                <form className="add-product-form">
                    <div className="form-group">
                        <label htmlFor="">Produto</label>
                        <select onChange={this.changeProduto} value={this.state.produto}>
                            <option value=""></option>
                            {this.state.produtos.map(res=>(
                                <option key={i++} value={res.pro_id_produto}>{res.pro_nome}</option>
                            ))}
                        </select>
                        <small>{errors.nomeProduto}</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Mercado</label>
                        <select onChange={this.changeMercado} value={this.state.mercado}>
                            <option value=""></option>
                            {this.state.mercados.map(res=>(
                                <option key={i++} value={res.mer_id_mercado}>{res.mer_nome}</option>
                            ))}
                        </select>
                        <small>{errors.nomeMercado}</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Nome Iten</label>
                        <input type="text" onChange={this.changeNomeIten} value={this.state.nomeIten} />
                        <small>{errors.nomeIten}</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Preço</label>
                        <div className="preco-div">
                            <div>$R</div>
                            <input type="text" onChange={this.changePreco} value={this.state.preco} />
                        </div>
                        <small>{errors.preco}</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Iten Foto</label>
                        <input type="file" onChange={this.changeImage}/>
                        <small>{errors.image}</small>
                    </div>

                    <div className="btn-div">
                        <button onClick={this.salvarNovoProduto} className="btn">Enter</button>
                    </div>
                </form>
            </div>
        )
    }
}
