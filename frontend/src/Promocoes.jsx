import React, { Component } from 'react'
import axios from 'axios'
import jwtDecode from 'jwt-decode';





export default class Promocoes extends Component {

    constructor()
    {
        super()

        this.state = {
            promocao:[],
            idProduto:"",
            ativo:jwtDecode(localStorage.getItem('jwtToken')).ativo
        }
    }

    componentDidMount() 
    {
        axios.get('lojas/get_promocoes')
        .then(res=>this.setState({promocao:res.data}))
    }

    changeidProduto = e => {
        this.setState({idProduto:e.target.value})
    }

    addPromocao = () => {
        axios.post("lojas/add_promocao", {idProduto:this.state.idProduto})
        .then(res=>{
            axios.get('lojas/get_promocoes')
            .then(res=>this.setState({promocao:res.data}))
        })
    }

    render() {
        return (
            <div>
                {this.state.ativo === 3 ? 

                    <div>
                        <h2>Add Promocao</h2>
                        <label htmlFor="">Id Produto:</label>
                        <input type="text" onChange={this.changeidProduto} value={this.state.value} />
                        <button onClick={this.addPromocao}>Add</button>
                    </div> : null
                }

                {this.state.promocao.map(res=>(
                        <>
                        <p>{res.it_nome}</p>
                        <p>{res.it_preco}</p>
                        </>
                ))}
            </div>
        )
    }
}
