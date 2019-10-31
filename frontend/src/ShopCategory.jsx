import React, { Component } from 'react'
import axios from "axios";
import "./shopCat.css";
import Spinner from "./Spinner"

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
        .then(res=>this.setState({items:res.data, loading:false}));
    }

    addClick = async (n, p) => {
      await   this.setState({addItem:[...this.state.addItem, {nome:n, preco:p}], total:this.state.total += p})
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
            <div className="total">
                <div className="total-items">
                    <div>
                        Total: <p>R${this.state.total.toFixed(2)}</p>
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
                        <button onClick={this.addClick.bind(this, res.it_nome, res.it_preco)}>Compra</button>
                    </div>
                ))}
            </div>
            </>
        )
    }
}

