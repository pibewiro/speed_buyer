import React, { Component } from 'react'
import axios from "axios";
// import logoImage from "./images/logo.jpg";
import InputMask from "react-input-mask";
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';

export default class NewStore extends Component {

    constructor()
    {
        super()

        this.state = {
            nomeMercado:"",
            image:"",
            mercadoUrl:"",
            rua:"",
            numero:"",
            complemento:"",
            cep:"",
            cidade:"",
            estado:"São Paulo",
            dataNascimento:"",
            idUsuario: "jwtToken" in localStorage ? jwt_decode(localStorage.getItem("jwtToken")).id_usuario : "",
            errors:[]
        }
    }


    changeNomeMercado = e => this.setState({nomeMercado:e.target.value})
    changeImage = e => this.setState({image:e.target.value})
    changeMercadoUrl = e => this.setState({mercadoUrl:e.target.value})
    changeRua = e => this.setState({rua:e.target.value})
    changeNumero = e => this.setState({numero:e.target.value})
    changeCep = e => this.setState({cep:e.target.value})
    changeCidade = e => this.setState({cidade:e.target.value})
    changeEstado = e => this.setState({estado:e.target.value})
    changeComplemento = e => this.setState({complemento:e.target.value})
    changeDataNascimento = e => this.setState({dataNascimento:e.target.value})

    limparState = () => {
        this.setState({
            nomeMercado:"",
            image:"",
            mercadoUrl:"",
            rua:"",
            numero:"",
            complemento:"",
            cep:"",
            cidade:"",
            estado:"",
            errors:[]
        })
    }

    salvarNovoMercado = e => {

        e.preventDefault();

        const novoMercado = {
            nomeMercado:this.state.nomeMercado,
            image:this.state.image,
            mercadoUrl:this.state.mercadoUrl,
            rua:this.state.rua,
            numero:this.state.numero,
            complemento:this.state.complemento,
            cep:this.state.cep,
            cidade:this.state.cidade,
            estado:this.state.estado
        }


        axios.post("admin/post_novo_mercado", novoMercado)
        .then((res)=>{
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
            <div id="form-content-pj">
                <h1 className="big-heading">Adicionar Novo Supermercado</h1>
               <form method="POST" enctype="multipart/form-data">
                   <p>* Indicates a Required Field</p>
                   <div className="row">
                       <div className="form-group">
                           <label htmlFor="CPF">*Nome do Supermercado</label>
                            <input type="text" onChange={this.changeNomeMercado} value={this.state.nomeMercado} />
                           <small class="errors">{errors.nomeMercado}</small>
                       </div>
                   </div>

                   <div className="row">
                       <div className="form-group">
                           <label htmlFor="CPF">*Image</label>
                            <input type="file" name="myimage" onChange={this.changeImage} value={this.state.image} />
                           <small class="errors">{errors.image}</small>
                       </div>

                       <div className="form-group">
                           <label htmlFor="CPF">*Mercado URL</label>
                           <input type="text" onChange={this.changeMercadoUrl} value={this.state.mercadoUrl} />
                           <small class="errors">{errors.mercadoUrl}</small>
                       </div>
                   </div>

                    <div className="address">
                        <p>Address</p>
                    </div>
                   <div className="row">
                        <div className="form-group">
                           <label htmlFor="">*Rua</label>
                           <input type="text" onChange={this.changeRua} value={this.state.rua}/>
                           <small class="errors">{errors.rua}</small>
                       </div>

                       <div className="form-group">
                           <label htmlFor="">*Numero</label>
                            <input type="text" onChange={this.changeNumero} value={this.state.numero}/>
                            <small class="errors">{errors.numero}</small>
                       </div> 

                       <div className="form-group">
                           <label htmlFor="">Complemento</label>
                            <input type="text" onChange={this.changeComplemento} value={this.state.complemento} />
                            <small class="errors">{errors.complemento}</small>
                       </div>
                   </div>

                   <div className="row">
                        <div className="form-group">
                           <label htmlFor="">*CEP</label>
                           <InputMask
                                mask="99999-999"
                                maskChar=""
                                type="text"
                                onChange={this.changeCep}
                                value={this.state.cep}
                           />
                            <small class="errors">{errors.cep}</small>
                        </div>
                   </div>

                   <div className="row">
                        <div className="form-group">
                           <label htmlFor="">*Cidade</label>
                            <input type="text"  onChange={this.changeCidade} value={this.state.cidade} />
                            <small class="errors">{errors.cidade}</small>
                        </div>

                        <div className="form-group">
                           <label htmlFor="">*Estado</label>
                             <input type="text" onChange={this.changeEstado} value={this.state.estado} readOnly/>
                             <small class="errors">{errors.estado}</small>
                        </div>
                   </div>
                   <div className="form-group-btn">
                        <button onClick={this.salvarNovoMercado} className="btn">Enter</button>
                   </div>
               </form>
            </div>
        )
    }
}
