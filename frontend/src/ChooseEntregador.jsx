import React, { Component } from 'react'
import axios from "axios"

export default class ChooseEntregador extends Component {

    constructor()
    {
        super()

        this.state = {
            entregadores:[]
        }
    }

    componentDidMount()
    {
        axios.get("lojas/get_entregadores")
        .then(res=>this.setState({entregadores:res.data}))
    }

    escolha = e => {
        this.props.history.push("/pagamento")
    }

    render() {
        return (
            <div id="entregador">
                <div class="entregador-content">
                {this.state.entregadores.map(res=>(
                    <div className="ent-card">
                        <p>{res.primeiro_nome} {res.sobre_nome}</p>
                        <p>{res.en_cidade}</p>
                        <button onClick={this.escolha} className="btn">Escolha</button>
                    </div>
                ))}
                </div>
            </div>
        )
    }
}