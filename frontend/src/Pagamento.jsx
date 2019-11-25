import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
//import {toast} from 'react-toastify';

export default class Pagamento extends Component {

    constructor()
    {
        super()

        this.state = {
            name:"Tesla",
            price:888.90
        }
    }


    handleToken = async (token) => {
       const response = await axios.post('lojas/checkout', {
            token,
            product:this.state
        })


        if(response.data === 'success')
        {
            //toast.configure();
            //toast('Success', {type:'success'})
            alert("123")
        }
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
