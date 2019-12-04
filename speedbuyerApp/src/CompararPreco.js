import React, { Component } from 'react'
import { Text, View, Picker, Image } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import jwtDecode from "jwt-decode"
import axios from "axios"

export default class CompararPreco extends Component {

    
    constructor()
    {
        super()

        this.state = {
            items:[],
            produtos:[],
            idProduto:"",
            favoritos:[],
            idUsuario:"",
            filtro:"",
        }
    }

    async componentDidMount()
    {
        await  AsyncStorage.getItem("jwtToken")
        .then(res=>{
            this.setState({idUsuario:jwtDecode(res).id_usuario})
        })

        axios.get(`http://arcane-savannah-75129.herokuapp.com/lojas/get_nome_produtos/${this.props.navigation.state.params.idCategoria}`)
        .then(res=>this.setState({produtos:res.data}))
        
        this.favoritoReload()
    }

    handleProduto = async (e) => {
        await this.setState({idProduto:e.target.value})

        await axios.get(`http://arcane-savannah-75129.herokuapp.com/lojas/comparar_precos/${this.state.idProduto}/asc`)
        .then(res=>this.setState({items:res.data}))
    }

    handleFavorito = (idItem, num) => {
            console.log(idItem, num)

        if(num === 0)
        {
            axios.post(`http://arcane-savannah-75129.herokuapp.com/lojas/favoritos`, {idItem, idUsuario:this.state.idUsuario})
            .then(()=>this.favoritoReload())
        }

        else if(num === 1)
        {
            axios.post(`http://arcane-savannah-75129.herokuapp.com/lojas/del_favoritos`, {idItem, idUsuario:this.state.idUsuario})
            .then(()=>this.favoritoReload())
        }
    }

    favoritoReload = () => {
        axios.get(`http://arcane-savannah-75129.herokuapp.com/lojas/get_favoritos/${this.state.idUsuario}`)
        .then(res=>this.setState({favoritos:res.data}))
    }

    changeFiltro = async (e) => {
        await this.setState({filtro:e.target.value})
        await axios.get(`http://arcane-savannah-75129.herokuapp.com/lojas/comparar_precos/${this.state.idProduto}/${this.state.filtro}`)
        .then(res=>this.setState({items:res.data}))
        .then(res=>this.favoritoReload())
    }


    render() {

        let arr = []
        this.state.favoritos.map(res=>arr.push(res.fav_id_item))

        return (
            <View>
                <View>
                    <View>
                        <Text>Produto: </Text>
                        <Picker
                             selectedValue={this.state.idProduto}
                             onValueChange={(itemValue, itemIndex) =>this.setState({idProduto: itemValue})}
                        >
                            <Picker.Item value="" />  
                            {this.state.produtos.map(res=>(
                                <Picker.Item label={res.pro_nome} value={res.pro_id_produto} />
                            ))}
                        </Picker>
                    </View>

                    <View>
                        <Text>Filtro: </Text>
                        <Picker>
                            <Picker.Item label="" />
                            <Picker.Item value="asc" label="Preco Mais Barato" />
                            <Picker.Item value="desc" label="Preco Mais Label" />
                        </Picker>
                    </View>
                </View>


                <View>
                    {this.state.items.map(res=>(
                        <View>
                            <Text>{res.it_nome}</Text>
                            <Text>R$ {res.it_preco.toFixed(2).toString().replace(".", ",")}</Text>
                        </View>
                    ))}
                </View>
            </View>
        )
    }
}
