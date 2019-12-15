import React, { Component } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import removeAccents from "remove-accents"
import Spinner from "./Spinner"
import UUID from 'uuid'

export default class MercadoList extends Component {
    
    constructor()
    {
        super()

        this.state = {
            storesList:[],
            loading:false
        }
    }

    componentDidMount()
    {
        const url = this.props.match.params.store_url;

        this.setState({loading:true})
        axios.get(`/lojas/get_stores_brand/${url}`)
        .then((res)=>this.setState({storesList:res.data, loading:false}))
        .catch(err=>console.log("Errors", err))
    }

    comprar = (nome, rua, idmercado, idComprar) => {
        this.props.history.push(`/store/${nome.toLowerCase().replace(/\s/g, "_")}/${removeAccents(rua).toLowerCase().replace(/\s/g, '_')}/${idmercado}`, {idComprar})
    }

    render() {

        return (
            <div className="store-cards">
            {this.state.loading ? <Spinner /> : this.state.storesList.map(res=>(
                <div className="store-card-wrapper">
                <div className="store-card">
                    <div className="store-card-1">
                        <h1>{res.mer_nome}</h1>
                        <img src={`/images/${res.mer_img_url}`} alt=""/>
                    </div>

                    <div className="store-card-2">
                            <p>{res.en_rua} {res.en_numero}</p>
                            <p>{res.en_cidade}, SP</p>
                            {res.en_complemento === "" ? null : <p>{res.en_complemento}</p>}
                            <p>{res.en_cep}</p>
                    </div>

                    <div className="store-card-3">
                        <button className="btn" onClick={this.comprar.bind(this, res.mer_nome, res.en_rua, res.mer_id_mercado, UUID())}>Comprar</button>
                    </div>
                </div>
                </div>
            ))}
        </div>
        )
    }
}
