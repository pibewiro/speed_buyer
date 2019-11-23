import React, { Component } from 'react'
import axios from "axios";
// import logoImage from "./images/logo.jpg";
//import InputMask from "react-input-mask";
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';

export default class NewStore extends Component {

    constructor()
    {
        super()

        this.state = {
            nomeMercado:"",
            image:null,
            mercadoUrl:"",
            idUsuario: "jwtToken" in localStorage ? jwt_decode(localStorage.getItem("jwtToken")).id_usuario : "",
            errors:[]
        }
    }


    changeNomeMercado = e => this.setState({nomeMercado:e.target.value})
    changeMercadoUrl = e => this.setState({mercadoUrl:e.target.value})
    changeRua = e => this.setState({rua:e.target.value})
    changeNumero = e => this.setState({numero:e.target.value})
    changeCep = e => this.setState({cep:e.target.value})
    changeCidade = e => this.setState({cidade:e.target.value})
    changeEstado = e => this.setState({estado:e.target.value})
    changeComplemento = e => this.setState({complemento:e.target.value})
    changeDataNascimento = e => this.setState({dataNascimento:e.target.value})
    changeImage = e => this.setState({image:e.target.files})

    limparState = () => {
        this.setState({
            nomeMercado:"",
            image:"",
            mercadoUrl:"",
            errors:[]
        })
    }

    salvarNovoMercado = async e => {

        e.preventDefault();

        const form = new FormData();

        if(this.state.image !== null)
        {
            form.append('files', this.state.image[0], this.state.image[0].name)
        }
        

        const novoMercado = {
            nomeMercado:this.state.nomeMercado,
            mercadoUrl:this.state.mercadoUrl,
            imageURL:this.state.image !== null ? this.state.image[0].name : "",
            fileType:this.state.image !== null ? this.state.image[0].type : ""
        }

        await axios.post("/admin/post_novo_mercado", novoMercado)
                .then((res)=>{
                    axios.post("/admin/upload", form)
                    this.limparState();
                    Swal.fire({
                        title:"Created New Market",
                        text:"Um novo Mercado foi criado", 
                        type:"success",
                        confirmButtonColor: '#00283D',
                    })
                    this.props.history.push("/profile");
                })
                .catch(err=>this.setState({errors:err.response.data}))

    }



    render() {

        const {errors} = this.state;

        return (
            <div id="form-novo-mercado">
                <h1 className="big-heading">Adicionar Novo Supermercado</h1>
               <form method="POST">
                    <p>*Indicates a Required Field</p>
                    <div className="form-group">
                        <label htmlFor="CPF">*Nome do Supermercado</label>
                        <input type="text" onChange={this.changeNomeMercado} value={this.state.nomeMercado} />
                        <small class="errors">{errors.nomeMercado}</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="CPF">*Image</label>
                        <input id="image" type="file" onChange={this.changeImage} />
                        <small class="errors">{errors.imageURL}</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="CPF">*Mercado URL</label>
                        <input type="text" onChange={this.changeMercadoUrl} value={this.state.mercadoUrl} />
                        <small class="errors">{errors.mercadoUrl}</small>
                    </div>

                    <div className="form-group-btn">
                        <button onClick={this.salvarNovoMercado} className="btn">Enter</button>
                   </div>
               </form>
            </div>
        )
    }
}
