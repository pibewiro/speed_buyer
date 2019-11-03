import React, { Component } from 'react'
import axios from 'axios'
import "./mercado.css"
import {Link} from "react-router-dom"

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

    render() {
        return (
            <div id="mercado">
                {this.state.mercados.map(res=>(
                    <Link to={`/mercados/${res.mer_url}`} class="mercado-card">
                        <img src={`/images/${res.mer_img_url}`} alt="" />
                        <h2>{res.mer_nome}</h2>
                    </Link>
            ))}
            </div>
        )
    }
}
