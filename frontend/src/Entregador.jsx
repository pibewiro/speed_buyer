import React, { Component } from 'react'
import axios from "axios";
// import logoImage from "./images/logo.jpg";
import InputMask from "react-input-mask";
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';

export default class Entregador extends Component {

    constructor()
    {
        super()

        this.state = {
            nome:"",
            sobrenome:"",
            cpf:"",
            email:"",
            senha:"",
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


    changeNome = e => this.setState({nome:e.target.value})
    changeSobrenome = e => this.setState({sobrenome:e.target.value})
    changeCpf = e => this.setState({cpf:e.target.value})
    changeEmail = e => this.setState({email:e.target.value})
    changeSenha = e => this.setState({senha:e.target.value})
    changeRua = e => this.setState({rua:e.target.value})
    changeNumero = e => this.setState({numero:e.target.value})
    changeCep = e => this.setState({cep:e.target.value})
    changeCidade = e => this.setState({cidade:e.target.value})
    changeEstado = e => this.setState({estado:e.target.value})
    changeComplemento = e => this.setState({complemento:e.target.value})
    changeDataNascimento = e => this.setState({dataNascimento:e.target.value})

    limparState = () => {
        this.setState({
            cpf:"",
            dataNascimento:"",
            rua:"",
            numero:"",
            complemento:"",
            cep:"",
            cidade:"",
            estado:"",
            errors:[]
        })
    }

    newPessoaEnt = e => {

        e.preventDefault();

        const newEnt = {
            cpf:this.state.cpf,
            rua:this.state.rua,
            numero:this.state.numero,
            complemento:this.state.complemento,
            cep:this.state.cep,
            cidade:this.state.cidade,
            estado:this.state.estado,
            dataNascimento:this.state.dataNascimento,
            idUsuario:this.state.idUsuario
        }


        axios.post("profile/post_entregador", newEnt)
        .then((res)=>{
            this.limparState();
            Swal.fire({
                title:"Created New Entregador",
                text:"Um novo Entregador foi criado", 
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
                <h1 className="big-heading">Entregador</h1>
               <form>
                   <p>* Indicates a Required Field</p>
                   <div className="row">
                       <div className="form-group">
                           <label htmlFor="CPF">*CPF</label>
                           <InputMask
                                mask="999.999.999-99"
                                maskChar=""
                                type="text"
                                onChange={this.changeCpf}
                                value={this.state.cpf}
                           />
                           <small class="errors">{errors.cpf}</small>
                       </div>
                       
                       <div className="form-group">
                           <label htmlFor="">*Data de Nascimento</label>
                           <input type="date" onChange={this.changeDataNascimento} value={this.state.dataNascimento} />
                           <small class="errors">{errors.dataNascimento}</small>
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
                        <button onClick={this.newPessoaEnt} className="btn">Enter</button>
                   </div>
               </form>
            </div>
        )
    }
}
