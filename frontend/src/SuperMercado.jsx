import React, { Component } from 'react'
import axios from "axios";

export default class SuperMercado extends Component {

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
        //let url = this.props.match.params.store_url
        //this.setState({loading:true})

        console.log(this.props)

        if("jwtToken" in localStorage === false)
        {
            this.props.history.push("/")
        }

        axios.get(`lojas/get_stores_brand/dalben`)
        .then(res=>{
            this.setState({storesList:res.data.result, loading:false})
        })
        .catch(err=>console.log(err))
    }

    render() {
        return (
            <div>
                Supermercado
            </div>
        )
    }
}
