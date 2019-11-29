import React, { Component } from 'react'
import { Text, View } from 'react-native'
import axios from "axios";

export default class Categorias extends Component {

    constructor()
    {
        super()

        this.state = {
            categorias:[]
        }
    }

    componentDidMount()
    {
        console.log("cat",this.props.navigation)
        axios.get(`http://arcane-savannah-75129.herokuapp.com/lojas/get_categorias`)
        .then(res=>this.setState({categorias:res.data}))
        //.then(()=>console.log(this.state))
    }
    render() {

        return (
            <View>
                {this.state.categorias.map(res=>(
                    <Text>{res.cat_nome}</Text>
                ))}
            </View>
        )
    }
}
