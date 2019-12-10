import React, { Component } from 'react'
import axios from 'axios'
import jwtDecode from "jwt-decode"
import moment from "moment"

export default class nota_fiscal extends Component {

    constructor()
    {
        super()

        this.state = {
            dados:[],
            nomeCliente:"",
            nomeMercado:"",
            total:"",
            rua:"",
            nomeEntregador:"",
            complemento:"",
            cep:"",
            codigoCompras:"",
            cidade:"",
            estado:"",
            data:""
        }
    }

    componentDidMount()
    {
        axios.get(`lojas/nota_fiscal/${this.props.location.state.idComprar}/${this.props.location.state.idEntregador}`)
        .then(res=>this.setState({dados:res.data}))
        .then(()=>this.setState({
            nomeCliente:`${jwtDecode(localStorage.getItem('jwtToken')).primeiroNome} ${jwtDecode(localStorage.getItem('jwtToken')).sobreNome}`,
            nomeEntregador:`${this.state.dados[0].primeiro_nome} ${this.state.dados[0].sobre_nome}`,
            nomeMercado:this.state.dados[0].mer_nome,
            codigoCompras:this.state.dados[0].sh_id_compras,
            rua:this.state.dados[0].en_rua,
            complemento:this.state.dados[0].en_complemento,
            cep:this.state.dados[0].en_cep,
            cidade:this.state.dados[0].en_cidade,
            estado:this.state.dados[0].en_estado,
            numero:this.state.dados[0].en_numero,
            data:this.state.dados[0].sh_data,
        }))
        .then(()=>this.calcularPreco())
    }

    calcularPreco = () => {
        let preco = 0;
         this.state.dados.map(res=>{
            preco += res.qtd * res.sh_preco;
             this.setState({total:preco.toFixed(2)})
        })
    }

    render() {
        return (
            <div>
                <div className="notaFiscal">

                    <h2>Cliente: {this.state.nomeCliente}</h2>
                    {this.state.dados.map(res=>(
                        <>
                        <div className="itemInfo">
                            <p className="itemInfo2"><span>Item:</span> {res.it_nome}</p>
                            <div className="itemInfo3">
                                <p><span>Quantidade:</span>  {res.qtd}</p>
                                <p><span>Preco:</span>  R${res.sh_preco.toFixed(2).toString().replace(".", ",")}</p>
                            </div>
                        </div>
                        </>
                    ))}
                    
                    <p className="total"><span>Total: R$</span>{this.state.total.toString().replace(".", ",")}</p>

                    <div className="address">
                        <p><span>Supermercado: </span>{this.state.nomeMercado}</p>
                        <p>{this.state.rua}, {this.state.numero}</p>
                        <p>{this.state.cep}</p>
                    </div>

                    <div class="nf-footer">
                        <p><span>Entregador: </span>{this.state.nomeEntregador}</p>
                        <p><span>Codigo de Compras: </span>{this.state.codigoCompras}</p>
                        <p><span>Data de Compra:</span> {moment(this.state.data).format("DD-MM-YYYY HH:mm")}</p>
                    </div>
                </div>                
            </div>
        )
    }
}
