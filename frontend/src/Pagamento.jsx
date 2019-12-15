import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import jwtDecode from "jwt-decode"
import moment from "moment"

//import {toast} from 'react-toastify';

export default class Pagamento extends Component {

    constructor()
    {
        super()

        this.state = {
            qtd:[],
            price:""
        }
    }

    componentDidMount()
    {
        axios.get(`/lojas/qtd_item/${this.props.location.state.idComprar}/${jwtDecode(localStorage.getItem("jwtToken")).id_usuario}`)
        .then(res=>this.setState({qtd:res.data}))
        .then(()=>this.calcularPreco())
    }

    calcularPreco = () => {
        let preco = 0;
         this.state.qtd.map(res=>{
            preco += res.qtd * res.it_preco;
             this.setState({price:preco})
        })
    }


    handleToken = async (token) => {
       const response = await axios.post('lojas/checkout', {
            token,
            product:this.state
        })


        if(response.data === 'success')
        {

            let items = [];

            this.state.qtd.map(res=>{
                items.push({
                    idUsuario:jwtDecode(localStorage.getItem("jwtToken")).id_usuario,
                    idItem:res.sh_it,
                    idCompras:this.props.location.state.idComprar,
                    qtd:res.qtd,
                    preco:res.it_preco,
                    idEntregador:this.props.location.state.idEntregador
                })
            })

            axios.post(`lojas/post_compras/${this.props.location.state.idComprar}`, items)
            this.nf();
        }
    }

    nf = () => {
        this.props.history.push("/nota_fiscal", {idComprar:this.props.location.state.idComprar, idEntregador:this.props.location.state.idEntregador})
    }

    render() {
        return (
            <div>
                <p>Payment</p>
                <StripeCheckout 
                    stripeKey="pk_test_Liu307TKygFZuUCNEh1oGB4O00MKuTQFHK" 
                    token={this.handleToken} 
                    billingAddress
                    shippingAddress
                    amount={this.state.price * 100}
                />
            </div>
        )
    }
}
