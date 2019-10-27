import React, { Component } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

export default class stores extends Component {

    constructor()
    {
        super()

        this.state = {
            storesList:[]
        }
    }
    componentDidMount()
    {
        if("jwtToken" in localStorage === false)
        {
            this.props.history.push("/")
        }

        axios.get("lojas/get_stores")
        .then(res=>this.setState({storesList:res.data.result}))
    }

    clickShop = store => {
        this.props.history.push(`/items/${store}`)
    }
    render() {

        return (
            <div className="store-cards">
                {this.state.storesList.map(res=>(
                    <div className="store-card-wrapper">
                    <div className="store-card">
                        <div className="store-card-1">
                            <h1>{res.mer_nome}</h1>
                            <img src={`images/${res.mer_img_url}`} alt=""/>
                        </div>

                        <div className="store-card-2">
                                <p>{res.en_rua} {res.en_numero}</p>
                                <p>{res.en_cidade}, SP</p>
                                {res.en_complemento === "" ? null : <p>{res.en_complemento}</p>}
                                <p>{res.en_cep}</p>
                        </div>

                        <div className="store-card-3">
                           <Link to={`/store/${res.mer_nome}/${res.en_rua}/${res.mer_info_id}`} className="btn">Comprar</Link> 
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        )
    }
}
