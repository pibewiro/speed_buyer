import React, { Component } from 'react'
import axios from "axios";
import "./shopCat.css";
import Spinner from "./Spinner"
import jwtDecode from "jwt-decode"

export default class ShopCategory extends Component {

    constructor()
    {
        super()

        this.state = {
            items:[],
            addItem:[],
            total:0,
            categoria:"",
            click:false,
            loading:false,
            length:0,
            usuario:jwtDecode(localStorage.getItem("jwtToken")),
            qtd:[]
        }
    }

    componentDidMount()
    {
        this.setState({loading:true})
        const {cat, id} = this.props.match.params;

        const catUrl = cat.replace(/_/g, " ");
        this.setState({categoria:catUrl})


        const itemInfo = {
            idMercado:id,
            categoria:catUrl,
        }

        axios.post("/lojas/get_items", itemInfo)
        .then(res=>{
            this.setState({items:res.data, loading:false})
        });

        axios.get(`/lojas/qtd_item/${this.props.location.state.idComprar}/${jwtDecode(localStorage.getItem("jwtToken")).id_usuario}`)
        .then(res=>this.setState({qtd:res.data}))
        .then(()=>this.calcularPreco())
    }

    calcularPreco = () => {
       let preco = 0;
        this.state.qtd.map(res=>{
           preco += res.qtd * res.it_preco;
            this.setState({total:preco})
        })
    }

    addClick = async (i, n, p) => {
       //await   this.setState({addItem:[...this.state.addItem, {nome:n, preco:p, length:n, idComprar:this.props.location.state.idComprar}], total:this.state.total += p})
        const cart ={
            idUsuario:this.state.usuario.id_usuario,
            idItem:i,
            idComprar:this.props.location.state.idComprar,
            preco:p
        }

       await  axios.post("/lojas/add_cart", cart)
                .then(res=>this.setState({qtd:res.data}))
        await this.calcularPreco()
        
    }

    subClick = async (i, n, p) => {

        const cart = {
            idUsuario:this.state.usuario.id_usuario,
            idItem:i,
            idComprar:this.props.location.state.idComprar
        }

       await axios.post(`/lojas/del_cart`, cart)
       .then(res=>console.log(res))

       await axios.get(`/lojas/qtd_item/${this.props.location.state.idComprar}/${jwtDecode(localStorage.getItem("jwtToken")).id_usuario}`)
       .then(res=>this.setState({qtd:res.data}))

       await this.calcularPreco()
    }


    checkout = () => {
        this.props.history.push("/chooseEntregador", {idComprar:this.props.location.state.idComprar})
    }

    render() {
        return (
            <> 
            {this.state.loading ? <Spinner /> :
            <>
                            <div className="total">
                            <div className="total-items">
                                <div>
                                    Total: <p>R${this.state.total}</p>
                                </div>
                                <button onClick={this.checkout}> Check Out</button>
                            </div>
                        </div>

                        <div id="items">
                            {this.state.items.map(res=>{

                                let id = 0;

                                this.state.qtd.map(res2=>{
                                    if(res2.sh_it === res.item_id)
                                    {
                                        id = res2.qtd
                                    }
                                })

                                console.log(id)

                                
                                return (
                                    <div class="item-card">
                                        <img src={`/images/${res.it_foto}`} alt="" />
                                        <h3>{res.it_nome}</h3>
                                        <p>R${res.it_preco.toString().replace(".", ",")}</p>
                                        <i class="fas fa-minus plus" onClick={this.subClick.bind(this, res.item_id, res.it_nome, res.it_preco)}></i>
                                        <i class="fas fa-plus plus" onClick={this.addClick.bind(this, res.item_id, res.it_nome, res.it_preco)}></i>
                                        <p>{id}</p>
                                    </div>
                                )
                            })}
                        </div>
                        </>
            }

            </>
        )
    }
}

