import React, { Component } from 'react'
import axios from 'axios'
import "./mercado.css"

export default class Mercados extends Component {

    constructor()
    {
        super()
        this.state = {
            mercados:[]
        }
    }

    componentDidMount()
    {
        axios.get("/lojas/get_mercados")
        .then(res=>{
            this.setState({mercados:res.data})
        })
    }

    showStore = (id, url) => {
        this.props.history.push(`/mercados/${url}`)
    }

    render() {
        return (
            <div id="mercado">
                {this.state.mercados.map(res=>(
                    <div class="mercado-card" onClick={this.showStore.bind(this, res.mer_id_mercado, res.mer_url)}>
                        <img src={`images/${res.mer_img_url}`} alt="" />
                        <h2>{res.mer_nome}</h2>
                    </div>
            ))}
            </div>
        )
    }
}
