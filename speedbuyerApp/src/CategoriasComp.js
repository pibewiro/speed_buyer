import React, { Component } from 'react'
import {Text, View, Button} from 'react-native';
import axios from "axios"

export default class CategoriasComp extends Component {

    constructor()
    {
        super()

        this.state = {
            categorias:[]
        }
    }

    componentDidMount()
    {
        axios.get("http://arcane-savannah-75129.herokuapp.com/lojas/get_categorias")
        .then(res=>this.setState({categorias:res.data}))
        .then(()=>console.log(this.state))
    }

    comparar = idCategoria => {
        console.log("Id Cat", idCategoria)
        this.props.navigation.navigate("CompararPreco", {idCategoria})
    }

    render() {
        return (
            <View>
                {this.state.categorias.map(res=>(
                    <View>
                        <Button title={res.cat_nome} onPress={this.comparar.bind(this, res.cat_id_categoria)}/>
                        <Text>{res.cat_nome}</Text>
                    </View>
                ))}
            </View>
        )
    }
}
