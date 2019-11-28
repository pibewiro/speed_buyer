import React, { Component } from 'react'
import InputMask from "react-input-mask";
// import logoImage from "./images/logo.jpg";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Swal from 'sweetalert2';
import moment from "moment"
import Spinner from "./Spinner"
// import DatePicker, { registerLocale } from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
// import pt_BR from "date-fns/locale/pt-BR";
// import { th } from 'date-fns/esm/locale';
// registerLocale("pt-BR", pt_BR);

export default class ProfileEntEdit extends Component {

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
            idEnt:"",
            idEndereco:"",
            emailOriginal:"",
            usuarioOriginal:"",
            dataNascimento:"",
            cpf:"",
            cpfOriginal:"",
            loading:false
        }
    }

    componentDidMount()
    {
        this.setState({loading:true})
        axios.get(`profile/get_entregador/${this.state.idUsuario}`)
        .then(res=>{
            this.setState({
                idEndereco:res.data.en_id_endereco,
                cep:res.data.en_cep,
                cidade:res.data.en_cidade,
                estado:res.data.en_estado,
                rua:res.data.en_rua,
                numero:res.data.en_numero,
                complemento:res.data.en_complemento,
                primeiroNome:res.data.primeiro_nome,
                sobreNome:res.data.sobre_nome,
                email:res.data.usu_email,
                idEnt:res.data.ent_id,
                dataNascimento:moment(res.data.uf_data_nascimento).format('DD-MM-YYYY'),
                usuario:res.data.nome_usuario,
                ativo:res.data.usu_ativo,
                cpf:res.data.ent_cpf,
                emailOriginal:res.data.usu_email,
                usuarioOriginal:res.data.nome_usuario,
                cpfOriginal:res.data.ent_cpf,
                loading:false
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
    changedataN = e => this.setState({dataNascimento:e.target.value})
    changeCPF = e => this.setState({cpf:e.target.value})

    salvarEdit = (e) => {
        e.preventDefault();
        
        let editPF = {
            dataNascimento:this.state.dataNascimento,
            cpf:this.state.cpf,
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
            idEnt:this.state.idEnt,
            emailOriginal:this.state.emailOriginal,
            usuarioOriginal:this.state.usuarioOriginal,
            cpfOriginal:this.state.cpfOriginal
        }

        axios.post("/profile/update_entregador", editPF)
        .then(()=>{
            this.limparState();
            Swal.fire({
                title:"Created New Pessoa Fisica",
                text:"Um novo Pessoa Fisica foi editado", 
                type:"success",
                confirmButtonColor: '#00283D',
            })

            this.props.history.push("/profile_entregador");
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
            <>
            {this.state.loading ? <Spinner /> : <div id="form-content-pj">
                <h1 class="big-heading">Entregador</h1>
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

                       <div className="form-group">
                           <label htmlFor="">Data de Nascimento</label>
                           <InputMask
                                onChange={this.changedataN}
                                mask="99-99-9999"
                                maskChar=""
                                value={this.state.dataNascimento}
                           />
                           <small class="errors">{errors.dataNascimento}</small>
                       </div>
                   </div>

                   <div className="row">
                   <div className="form-group">
                           <label htmlFor="">CPF</label>
                           <InputMask
                                onChange={this.changeCPF}
                                mask="999.999.999-99"
                                maskChar=""
                                value={this.state.cpf}
                           />
                           <small class="errors">{errors.cpf}</small>
                       </div>

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
            }
            </>
        )
    }
}
