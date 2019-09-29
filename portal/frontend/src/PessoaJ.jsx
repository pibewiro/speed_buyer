import React, { Component } from 'react'
// import logoImage from "./images/logo.jpg";
import axios from "axios";

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
            estado:""
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
            email:this.state.email,
            senha:this.state.senha,
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
            estado:this.state.estado
        }

        console.log(novoPJ);

        axios.post("/user/post_pj", novoPJ)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    render() {
        return (
            <div id="form-content-pj">
                <h1 class="big-heading">Pessoa Juridica</h1>
               <form>
                   <div className="row">
                       <div className="form-group">
                           <label htmlFor="">Email</label>
                           <input type="text" onChange={this.changeEmail} value={this.state.email} />
                       </div>

                       <div className="form-group">
                           <label htmlFor="">Senha</label>
                           <input type="text" onChange={this.changeSenha} value={this.state.senha} />
                       </div>
                   </div>

                   <div className="row">
                       <div className="form-group">
                           <label htmlFor="">CNPJ</label>
                           <input type="text" onChange={this.changeCnpj} value={this.state.cnpj} />
                       </div>

                       <div className="form-group">
                           <label htmlFor="">Nome Fantasia</label>
                           <input type="text" onChange={this.changeNomeFantasia} value={this.state.nomeFantasia} />
                       </div>

                       <div className="form-group">
                           <label htmlFor="">Razão Social</label>
                           <input type="text" onChange={this.changeRazaoSocial} value={this.state.razaoSocial} />
                       </div>
                   </div>

                   <div className="row">
                       <div className="form-group">
                           <label htmlFor="">Inscrição Municipal</label>
                           <input type="text" onChange={this.changeInscricaoMun} value={this.state.inscricaoMun} />
                       </div>

                       <div className="form-group">
                           <label htmlFor="">Inscrição Estadual</label>
                           <input type="text" onChange={this.changeInscricaoEst} value={this.state.inscricaoEst} />
                       </div>
                   </div>

                    <div className="address">
                        <p>Address</p>
                    </div>
                   <div className="row">
                        <div className="form-group">
                           <label htmlFor="">Rua</label>
                           <input type="text" onChange={this.changeRua} value={this.state.rua} />
                       </div>

                       <div className="form-group">
                           <label htmlFor="">Numero</label>
                           <input type="text" onChange={this.changeNumero} value={this.state.numero} />
                       </div> 

                       <div className="form-group">
                           <label htmlFor="">Complemento</label>
                           <input type="text" onChange={this.changeComplemento} value={this.state.complemento} />
                       </div>
                   </div>

                   <div className="row">
                        <div className="form-group">
                           <label htmlFor="">CEP</label>
                           <input type="text" onChange={this.changeCep} value={this.state.cep} />
                        </div>
                   </div>

                   <div className="row">
                        <div className="form-group">
                           <label htmlFor="">Cidade</label>
                           <input type="text" onChange={this.changeCidade} value={this.state.cidade} />
                        </div>

                        <div className="form-group">
                           <label htmlFor="">Estado</label>
                           <input type="text" onChange={this.changeEstado} value={this.state.estado} />
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
