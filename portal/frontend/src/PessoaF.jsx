import React, { Component } from 'react'
// import axios from "axios";
// import logoImage from "./images/logo.jpg";

export default class signin extends Component {

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
            estado:"",
        }
    }

    // componentDidMount()
    // {
    //     axios.get("/profile/get_user")
    //     .then(res=>console.log(res))
    // }

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

    newPessoaF = e => {

        e.preventDefault();
        alert("pessoaF");
    }



    render() {
        return (
            <div id="form-content-pj">
                <h1 className="big-heading">Pessoa Fisica</h1>
               <form>
                   <div className="row">
                       <div className="form-group">
                           <label htmlFor="">Nome</label>
                           <input type="text" onChange={this.changeNome} value={this.state.nome}/>
                       </div>

                       <div className="form-group">
                           <label htmlFor="">Sobrenome</label>
                           <input type="text" onChange={this.changeSobrenome} value={this.state.sobrenome}/>
                       </div>
                   </div>

                   <div className="row">
                       <div className="form-group">
                           <label htmlFor="">CPF</label>
                           <input type="text" onChange={this.changeCpf} value={this.state.cpf}/>
                       </div>
                   </div>

                   <div className="row">
                       <div className="form-group">
                           <label htmlFor="">Email</label>
                           <input type="text" onChange={this.changeEmail} value={this.state.email}/>
                       </div>

                       <div className="form-group">
                           <label htmlFor="">Senha</label>
                           <input type="text" onChange={this.changeSenha} value={this.state.senha}/>
                       </div>
                   </div>

                    <div className="address">
                        <p>Address</p>
                    </div>
                   <div className="row">
                        <div className="form-group">
                           <label htmlFor="">Rua</label>
                           <input type="text" onChange={this.changeRua} value={this.state.rua}/>
                       </div>

                       <div className="form-group">
                           <label htmlFor="">Numero</label>
                        <input type="text" onChange={this.changeNumero} value={this.state.numero}/>
                       </div> 

                       <div className="form-group">
                           <label htmlFor="">Complemento</label>
                        <input type="text" onChange={this.changeComplemento} value={this.state.complemento} />
                       </div>
                   </div>

                   <div className="row">
                        <div className="form-group">
                           <label htmlFor="">CEP</label>
                            <input type="text" onChange={this.changeCep} value={this.state.cep}/>
                        </div>
                   </div>

                   <div className="row">
                        <div className="form-group">
                           <label htmlFor="">Cidade</label>
                            <input type="text" onChange={this.changeCidade} value={this.state.cidade}/>
                        </div>

                        <div className="form-group">
                           <label htmlFor="">Estado</label>
                             <input type="text" onChange={this.changeEstado} value={this.state.estado}/>
                        </div>
                   </div>
                   <div className="form-group-btn">
                        <button onClick={this.newPessoaF} className="btn">Enter</button>
                   </div>
               </form>
            </div>
        )
    }
}
