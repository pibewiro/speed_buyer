import React, { Component } from 'react'
import InputMask from "react-input-mask";
// import logoImage from "./images/logo.jpg";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Swal from 'sweetalert2';

export default class signin extends Component {

    constructor()
    {
        super()

        this.state = { 
            cnpj:"",
            nomeFantasia:"",
            razaoSocial:"",
            inscricaoMun:"",
            inscricaoEst:"",
            rua:"",
            numero:"",
            complemento:"",
            cep:"",
            cidade:"",
            estado:"São Paulo",
            idUsuario:"jwtToken" in localStorage ? jwt_decode(localStorage.getItem("jwtToken")).id_usuario : "",
            errors:[]
        }
    }

    changeEmail = e => this.setState({email:e.target.value})
    changeSenha = e => this.setState({senha:e.target.value})
    changeCnpj = e => this.setState({cnpj:e.target.value})
    changeNomeFantasia = e => this.setState({nomeFantasia:e.target.value})
    changeRazaoSocial = e => this.setState({razaoSocial:e.target.value})
    changeInscricaoMun = e => this.setState({inscricaoMun:e.target.value})
    changeInscricaoEst = e => this.setState({inscricaoEst:e.target.value})
    changeRua = e => this.setState({rua:e.target.value})
    changeNumero = e => this.setState({numero:e.target.value})
    changeCep = e => this.setState({cep:e.target.value})
    changeCidade = e => this.setState({cidade:e.target.value})
    changeEstado = e => this.setState({estado:e.target.value})
    changeComplemento = e => this.setState({complemento:e.target.value})

    salvar = (e) => {
        e.preventDefault();
        
        let novoPJ = {
            cnpj:this.state.cnpj,
            nomeFantasia:this.state.nomeFantasia,
            razaoSocial:this.state.razaoSocial,
            inscricaoMun:this.state.inscricaoMun,
            inscricaoEst:this.state.inscricaoEst,
            rua:this.state.rua,
            numero:this.state.numero,
            complemento:this.state.complemento,
            cep:this.state.cep,
            cidade:this.state.cidade,
            estado:this.state.estado,
            idUsuario: this.state.idUsuario
        }

        axios.post("/profile/post_pessoa_juridica", novoPJ)
        .then(()=>{
            this.limparState();
            Swal.fire({
                title:"Created New Pessoa Juridica",
                text:"Um novo Pessoa Fisica foi criado", 
                type:"success",
                confirmButtonColor: '#00283D',
            })

            this.props.history.push("/profilePJ");
        })
        .catch(err=>this.setState({errors:err.response.data}));
    }

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

    render() {
        const {errors} = this.state;

        return (
            <div id="form-content-pj">
                <h1 class="big-heading">Pessoa Juridica</h1>
               <form>
                   <div className="row">
                       <div className="form-group">
                           <label htmlFor="">CNPJ</label>
                            <InputMask
                                mask="99.999.999/9999-99"
                                maskChar=""
                                type="text"
                                onChange={this.changeCnpj}
                                value={this.state.cnpj}
                            />
                            <small class="errors">{errors.cnpj}</small>
                       </div>

                       <div className="form-group">
                           <label htmlFor="">Nome Fantasia</label>
                           <input type="text" onChange={this.changeNomeFantasia} value={this.state.nomeFantasia} />
                           <small class="errors">{errors.nomeFantasia}</small>
                       </div>

                       <div className="form-group">
                           <label htmlFor="">Razão Social</label>
                           <input type="text" onChange={this.changeRazaoSocial} value={this.state.razaoSocial} />
                           <small class="errors">{errors.razaoSocial}</small>
                       </div>
                   </div>

                   <div className="row">
                       <div className="form-group">
                           <label htmlFor="">Inscrição Municipal</label>
                           <input type="text" onChange={this.changeInscricaoMun} value={this.state.inscricaoMun} />
                           <small class="errors">{errors.inscricaoMun}</small>
                       </div>

                       <div className="form-group">
                           <label htmlFor="">Inscrição Estadual</label>
                           <input type="text" onChange={this.changeInscricaoEst} value={this.state.inscricaoEst} />
                           <small class="errors">{errors.inscricaoEst}</small>
                       </div>
                   </div>

                    <div className="address">
                        <p>Address</p>
                    </div>
                   <div className="row">
                        <div className="form-group">
                           <label htmlFor="">Rua</label>
                           <input type="text" onChange={this.changeRua} value={this.state.rua} />
                           <small class="errors">{errors.rua}</small>
                       </div>

                       <div className="form-group">
                           <label htmlFor="">Numero</label>
                           <input type="text" onChange={this.changeNumero} value={this.state.numero} />
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
                           <label htmlFor="">CEP</label>
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
                           <label htmlFor="">Cidade</label>
                           <input type="text" onChange={this.changeCidade} value={this.state.cidade} />
                           <small class="errors">{errors.cidade}</small>
                        </div>

                        <div className="form-group">
                           <label htmlFor="">Estado</label>
                           <input type="text" onChange={this.changeEstado} value={this.state.estado} readOnly />
                           <small class="errors">{errors.estado}</small>
                        </div>
                   </div>
                   <div className="form-group-btn">
                        <button onClick={this.salvar} type="submit" class="btn">Enter</button>
                   </div>
               </form>
            </div>
        )
    }
}
