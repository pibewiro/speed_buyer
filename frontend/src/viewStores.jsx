import React, { Component } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import axios from 'axios'

export default class viewStores extends Component {

    constructor()
    {
        super()

        this.state = {
            storesList:[]
        }
    }

    componentDidMount()
    {
        axios.get("lojas/get_stores")
        .then(res=>this.setState({storesList:res.data.result}))
    }

    render() {
        return (
            <div>
                <Navbar />
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
                           <button className="btn">Comprar</button> 
                        </div>
                    </div>
                    </div>
                ))}
            </div>
                <Footer />
            </div>
        )
    }
}
