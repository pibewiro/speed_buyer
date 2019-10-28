import React, { Component } from 'react'
import axios from "axios";

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
        }
    }

    componentDidMount()
    {
        const {cat, id} = this.props.match.params;

        const catUrl = cat.replace(/_/g, " ");
        this.setState({categoria:catUrl})


        const itemInfo = {
            idMercado:id,
            categoria:catUrl
        }

        axios.post("/lojas/get_items", itemInfo)
        .then(res=>this.setState({items:res.data}));

        if("item" in localStorage === true)
        {
            this.setState({addItem2:JSON.parse(localStorage.getItem("item"))})
        }
    }

    addClick = (n, p) => {
        this.setState({addItem:[...this.state.addItem, {nome:n, preco:p}], total:this.state.total += p})
    }

    // add = async (n, p) => {
    //     let price = 0;

    //    this.state.addItem.map(res=>{
    //        price = price + res.preco

    //     })

    //     this.setState({total:price})
    // }

    render() {
        return (
            <div>
                {this.state.items.map(res=>(
                    <>
                    <p>{res.it_nome}</p>
                    <p>{res.it_preco}</p>
                    <button onClick={this.addClick.bind(this, res.it_nome, res.it_preco)}>Enter</button>
                    </>
                ))}

                <div>
                    {this.state.addItem.map(res=>(
                        <>
                        <p>{res.nome}</p>
                        <p>{res.preco}</p>
                        </>
                        ))}
                    <p>{this.state.total.toFixed(2)}</p>
                </div>
                <button id="add" onClick={this.add}>Add</button>
            </div>
        )
    }
}
