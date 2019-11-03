import React, { Component } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import removeAccents from "remove-accents"
import Spinner from "./Spinner"

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
                       <Link to={`/store/${res.mer_nome.toLowerCase().replace(/\s/g, "_")}/${removeAccents(res.en_rua).toLowerCase().replace(/\s/g, '_')}/${res.mer_info_id}`} className="btn">Comprar</Link> 
                    </div>
                </div>
                </div>
            ))}
        </div>
        )
    }
}
