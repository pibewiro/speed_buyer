import React, { Component } from 'react'
import axios from 'axios'
import jwtDecode from "jwt-decode"

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
            estado:""
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
            estado:this.state.dados[0].en_estado
        }))
        .then(()=>this.calcularPreco())
    }

    calcularPreco = () => {
        let preco = 0;
         this.state.dados.map(res=>{
            preco += res.qtd * res.sh_preco;
             this.setState({total:preco})
        })
    }

    render() {
        return (
            <div>
                <div>
                    <p>{this.state.nomeCliente}</p>

                    {this.state.dados.map(res=>(
                        <>
                        <p>{res.it_nome}</p>
                        <p>{res.qtd}</p>
                        </>
                    ))}
                </div>                
            </div>
        )
    }
}
