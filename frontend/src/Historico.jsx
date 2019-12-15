import React, { Component } from 'react'
import axios from 'axios'
import jwtDecode  from "jwt-decode"
import moment from "moment"

export default class Historico extends Component {

    constructor()
    {
        super()

        this.state = {
            historico:[],
            idUsuario:""
        }
    }

    async componentDidMount()
    {
        await this.setState({idUsuario:jwtDecode(localStorage.getItem('jwtToken')).id_usuario})
        await axios.get(`lojas/historico/${this.state.idUsuario}`)
        .then(res=>this.setState({historico:res.data}))
    }

    notaFiscal = (idComprar, idEntregador) => {
        this.props.history.push("/nota_fiscal", {idComprar, idEntregador})
    }


    render() {

        return (
            <div className="historico-div">
                {this.state.historico.length !== 0 ?  this.state.historico.map(res=>(
                    <div className="historico">
                        <div className="h1">
                        <p><span>Codigo de Compras:</span> {res.comp_id_compras}</p>
                        </div>

                        <div className="h2">
                        <p><span>Data:</span>{moment(res.data_comprado.toString()).format("DD/MM/YYYY HH:mm")}</p>
                        </div>

                        <div className="h3">
                        <p><span>Mercado:</span>{res.mer_nome}</p>
                        </div>

                        <button class="btn" onClick={this.notaFiscal.bind(this, res.comp_id_compras, res.comp_id_ent)}>Enter</button>
                    </div>
                )): 
                
                <h2>Nao Tem Historico nesta Momento</h2>
                
                }
            </div>
        )
    }
}
