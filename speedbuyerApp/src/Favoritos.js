import React, { Component } from 'react'
import { Text, View, Picker, Image } from 'react-native'
import axios from 'axios'
import jwtDecode from "jwt-decode"
import AsyncStorage from '@react-native-community/async-storage';


export default class Favoritos extends Component {

    constructor()
    {
        super()

        this.state = {
            favoritos:[],
            idUsuario:"",
            filtro:"",
            filtro2:""
        }
    }

    async componentDidMount()
    {
        await  AsyncStorage.getItem("jwtToken")
        .then(res=>{
            this.setState({idUsuario:jwtDecode(res).id_usuario})
        })

       await  axios.get(`http://arcane-savannah-75129.herokuapp.com/lojas/get_favoritos_pagina/${this.state.idUsuario}/asc`)
        .then(res=>this.setState({favoritos:res.data}))
        .then(()=>console.log(this.state))
    }

    handleFavorito = (idItem, num) => {
            console.log(idItem, num)

        if(num === 0)
        {
            axios.post(`lojas/favoritos`, {idItem, idUsuario:this.state.idUsuario})
            .then(()=>this.favoritoReload())
        }

        else if(num === 1)
        {
            axios.post(`lojas/del_favoritos`, {idItem, idUsuario:this.state.idUsuario})
            .then(()=>this.favoritoReload())
        }
    }

    favoritoReload = () => {
        axios.get(`lojas/get_favoritos_pagina/${this.state.idUsuario}/asc`)
        .then(res=>this.setState({favoritos:res.data}))
    }

    changeFiltro = async (e) => {
        await this.setState({filtro:e.target.value})
        await axios.get(`lojas/get_favoritos_pagina/${this.state.idUsuario}/${this.state.filtro}`)
        .then(res=>this.setState({favoritos:res.data}))
    }


    render() {


        let arr = []
        this.state.favoritos.map(res=>arr.push(res.fav_id_item))

        return (
            <View>
                        <Text>Favorito</Text>


                    {this.state.favoritos.map(res=>(
                        <>
                            <Text>{res.it_nome}</Text>
                            <Text>R$ {res.it_preco.toFixed(2).toString().replace(".", ",")}</Text>
                        </>
                    ))}

            </View>
        )
    }
}
