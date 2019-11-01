import React, { Component } from 'react'
import axios from "axios";
import "./shopCat.css";
import Spinner from "./Spinner"
import jwtDecode from "jwt-decode"

export default class ShopCategory extends Component {

    constructor()
    {
        super()

        this.state = {
            items:[],
            addItem:[],
            total:0,
            categoria:"",
            click:false,
            loading:false,
            length:0,
            usuario:jwtDecode(localStorage.getItem("jwtToken"))
        }
    }

    componentDidMount()
    {
        this.setState({loading:true})
        const {cat, id} = this.props.match.params;

        const catUrl = cat.replace(/_/g, " ");
        this.setState({categoria:catUrl})


        const itemInfo = {
            idMercado:id,
            categoria:catUrl
        }

        axios.post("/lojas/get_items", itemInfo)
        .then(res=>{
            this.setState({items:res.data, loading:false})
        });
    }

    addClick = async (i, n, p) => {
      //  await   this.setState({addItem:[...this.state.addItem, {nome:n, preco:p, length:n}], total:this.state.total += p})
        const cart ={
            idUsuario:this.state.usuario.id_usuario,
            idItem:i
        }
       await  axios.post("/lojas/add_cart", cart)
    }

    subClick = async (i, n, p) => {

        const cart = {
            idUsuario:this.state.usuario.id_usuario,
            idItem:i
        }

        console.log(cart)
       axios.post(`/lojas/del_cart`, cart)
       .then(res=>console.log(res))
        
        //await   this.setState({total:this.state.total <= 0 ? 0 :this.state.total -= p})
        
        // this.state.addItem.map(res=>{
        //     if(n === res.nome)
        //     {
        //         this.state.addItem.splice(res, 1);
        //         return
        //     }
        // })
      }

    add = async (n, p) => {
        let price = 0;

       this.state.addItem.map(res=>{
           price = price + res.preco

        })

        this.setState({total:price})
    }

    render() {
        return (
            <> 
            {this.state.loading ? <Spinner /> :
            <>
                            <div className="total">
                            <div className="total-items">
                                <div>
                                    Total: <p>R${this.state.total}</p>
                                </div>
                                <button> Check Out</button>
                            </div>
                        </div>

                        <div id="items">
                            {this.state.items.map(res=>(
                                <div class="item-card">
                                    <img src={`/images/${res.it_foto}`} alt="" />
                                    <h3>{res.it_nome}</h3>
                                    <p>R${res.it_preco}</p>
                                    <button onClick={this.subClick.bind(this, res.item_id, res.it_nome, res.it_preco)}>Delete</button>
                                    <br /><br />
                                    <button onClick={this.addClick.bind(this, res.item_id, res.it_nome, res.it_preco)}>Add</button>

                                    {/* <i class="fas fa-minus plus" onClick={this.subClick.bind(this, res.item_id, res.it_nome, res.it_preco)}></i>
                                    <i class="fas fa-plus plus" onClick={this.addClick.bind(this, res.item_id, res.it_nome, res.it_preco)}></i> */}
                                    <input type="text" />
                                </div>
                            ))}
                        </div>
                        </>
            }

            </>
        )
    }
}

