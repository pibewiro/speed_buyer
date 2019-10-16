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
            estado:"",
            idUsuario:"jwtToken" in localStorage ? jwt_decode(localStorage.getItem("jwtToken")).id_usuario : "",
            errors:[],
            primeiroNome:"",
            sobreNome:"",
            email:"",
            usuario:"",
            idUJ:"",
            idEndereco:"",
            emailOriginal:"",
            usuarioOriginal:""
        }
    }

    componentDidMount()
    {
        axios.get(`profile/get_pessoa_juridico/${this.state.idUsuario}`)
        .then(res=>{
            console.log(res.data)
            this.setState({
                primeiroNome:res.data.primeiro_nome,
                sobreNome:res.data.sobre_nome,
                nomeFantasia:res.data.uj_nome_fantasia,
                razaoSocial:res.data.uj_razao_social,
                inscricaoMun:res.data.uj_inscricao_estadual,
                inscricaoEst:res.data.uj_inscricao_municipal,
                rua:res.data.en_rua,
                numero:res.data.en_numero,
                complemento:res.data.en_complemento,
                cep:res.data.en_cep,
                cidade:res.data.en_cidade,
                estado:res.data.en_estado,
                cnpj:res.data.uj_cnpj,
                email:res.data.usu_email,
                usuario:res.data.nome_usuario,
                idEndereco:res.data.en_id_endereco,
                idUJ:res.data.id_uj,
                emailOriginal:res.data.usu_email,
                usuarioOriginal:res.data.nome_usuario
            })
        })
    }

    

    changeEmail = e => this.setState({email:e.target.value})
    changePrimeiroNome = e => this.setState({primeiroNome:e.target.value})
    changeSobreNome = e => this.setState({sobreNome:e.target.value})
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
    changeUsuario = e => this.setState({usuario:e.target.value})

    salvarEdit = (e) => {
        e.preventDefault();
        
        let editPJ = {
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
            primeiroNome:this.state.primeiroNome,
            sobreNome:this.state.sobreNome,
            email:this.state.email,
            usuario:this.state.usuario,
            idUsuario: this.state.idUsuario,
            idEndereco:this.state.idEndereco,
            idUJ:this.state.idUJ,
            emailOriginal:this.state.emailOriginal,
            usuarioOriginal:this.state.usuarioOriginal
        }

        axios.post("/profile/update_pessoa_juridica", editPJ)
        .then(()=>{
            this.limparState();
            Swal.fire({
                title:"Created New Pessoa Juridica",
                text:"Um novo Pessoa Fisica foi editado", 
                type:"success",
                confirmButtonColor: '#00283D',
            })

            this.props.history.push("/profilePJ");
            console.log(editPJ);
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
                           <label htmlFor="">Primeiro Nome</label>
                           <input type="text" onChange={this.changePrimeiroNome} value={this.state.primeiroNome} />
                           <small class="errors">{errors.primeiroNome}</small>
                       </div>

                       <div className="form-group">
                           <label htmlFor="">Sobre Nome</label>
                           <input type="text" onChange={this.changeSobreNome} value={this.state.sobreNome} />
                           <small class="errors">{errors.sobreNome}</small>
                       </div>
                   </div>

                   <div className="row">
                       <div className="form-group">
                           <label htmlFor="">Email</label>
                           <input type="text" onChange={this.changeEmail} value={this.state.email} />
                           <small class="errors">{errors.email}</small>
                       </div>

                       <div className="form-group">
                           <label htmlFor="">Usuario</label>
                           <input type="text" onChange={this.changeUsuario} value={this.state.usuario} />
                           <small class="errors">{errors.usuario}</small>
                       </div>
                   </div>

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
                           <input type="text" onChange={this.changeEstado} value={this.state.estado} />
                           <small class="errors">{errors.estado}</small>
                        </div>
                   </div>
                   <div className="form-group-btn">
                        <button onClick={this.salvarEdit} type="submit" class="btn">Enter</button>
                   </div>
               </form>
            </div>
        )
    }
}
