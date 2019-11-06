import React, { Component } from 'react'
import axios from "axios";
// import logoImage from "./images/logo.jpg";
import InputMask from "react-input-mask";
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';

export default class AddStore extends Component {

    constructor()
    {
        super()

        this.state = {
            idMercado:"",
            rua:"",
            numero:"",
            complemento:"",
            cep:"",
            cidade:"",
            estado:"São Paulo",
            idUsuario: "jwtToken" in localStorage ? jwt_decode(localStorage.getItem("jwtToken")).id_usuario : "",
            errors:[],
            mercados:[]
        }
    }

    componentDidMount()
    {
        axios.get("/admin/get_mercados")
        .then(res=>this.setState({mercados:res.data}))
    }


    changeIdMercado = e => {
        this.setState({idMercado:e.target.value})
    }
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
            rua:"",
            numero:"",
            complemento:"",
            cep:"",
            cidade:"",
            estado:"",
            errors:[]
        })
    }

    addMercado = e => {

        e.preventDefault();

        const addMercado = {
            idMercado:this.state.idMercado,
            rua:this.state.rua,
            numero:this.state.numero,
            complemento:this.state.complemento,
            cep:this.state.cep,
            cidade:this.state.cidade,
            estado:this.state.estado
        }


        axios.post("admin/add_mercado", addMercado)
        .then((res)=>{
            this.limparState();
            Swal.fire({
                title:"Added New Market",
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
                <h1 className="big-heading">Adicionar Supermercado</h1>
               <form method="POST" enctype="multipart/form-data">
                   <p>* Indicates a Required Field</p>
                   <div className="row">
                       <div className="form-group">
                           <label htmlFor="">*Nome do Supermercado</label>
                            <select type="text" className="add-store-select" onChange={this.changeIdMercado} value={this.state.idMercado} >
                                <option></option>
                                {this.state.mercados.map(res=>(
                                    <option value={res.mer_id_mercado}>{res.mer_nome}</option>
                                ))}
                           </select>
                           <small class="errors">{errors.idMercado}</small>
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
                        <button onClick={this.addMercado} className="btn">Enter</button>
                   </div>
               </form>
            </div>
        )
    }
}
