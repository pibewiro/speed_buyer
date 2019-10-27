import React, { Component } from 'react'
import "./categories.css";
import axios from 'axios';

export default class Categorias extends Component {

    constructor()
    {
        super()
        
        this.state = {
            derivados:"",
            frutas:"",
            vegetais:"",
            bebidas:"",
            carnes:"",
            dolces:"",
            outras:"",
            idMercado:"",
            nomeMercado:"",
            rua:""
        }
        
    }

    componentDidMount()
    {
        axios.get("/lojas/get_categorias")
        .then(res=>this.setState({
            derivados:res.data[0].cat_nome,
            frutas:res.data[1].cat_nome,
            vegetais:res.data[2].cat_nome,
            bebidas:res.data[3].cat_nome,
            carnes:res.data[4].cat_nome,
            dolces:res.data[5].cat_nome,
            outras:res.data[6].cat_nome
        }))

        console.log(this.props.match.params)

        let idMercado = this.props.match.params.id;
        let nomeMercado = this.props.match.params.name;
        let rua = this.props.match.params.rua;

        this.setState({idMercado, nomeMercado, rua})
    }

    clickCat = (cat) => {
        this.props.history.push(`/store/${this.state.nomeMercado.toLowerCase()}/${this.state.rua.toLowerCase()}/${this.state.idMercado}/${cat.toLowerCase().replace(/\s/g, "_")}`)
    }


    render() {
        return (
            <div id="categories">
                <div className="rowCat">
                    <div onClick={this.clickCat.bind(this, this.state.derivados)} className="cat-div">
                        <div>
                            <i class="fas fa-cheese fa-3x"></i>
                            <h2>{this.state.derivados}</h2>
                        </div>
                    </div>

                    <div onClick={this.clickCat.bind(this, this.state.frutas)} className="cat-div">
                        <div>
                            <i class="fas fa-apple-alt fa-3x"></i>
                            <h2>{this.state.frutas}</h2>
                        </div>
                    </div>

                    <div onClick={this.clickCat.bind(this, this.state.vegetais)} className="cat-div">
                        <div>
                            <i class="fas fa-carrot fa-3x"></i>
                            <h2>{this.state.vegetais}</h2>
                        </div>
                    </div>

                    <div onClick={this.clickCat.bind(this, this.state.bebidas)} className="cat-div">
                        <div>
                            <i class="fas fa-wine-glass-alt fa-3x"></i>
                            <h2>{this.state.bebidas}</h2>
                        </div>
                    </div>

                </div>

                <div className="rowCat2">
                    <div onClick={this.clickCat.bind(this, this.state.carnes)} className="cat-div">
                        <div>
                            <i class="fas fa-drumstick-bite fa-3x"></i>
                            <h2>{this.state.carnes}</h2>
                        </div>
                    </div>

                    <div onClick={this.clickCat.bind(this, this.state.dolces)} className="cat-div">
                        <div>
                            <i class="fas fa-cookie-bite fa-3x"></i>
                            <h2>{this.state.dolces}</h2>
                        </div>
                    </div>

                    <div onClick={this.clickCat.bind(this, this.state.outras)} className="cat-div">
                        <div>
                            <i class="fas fa-random fa-3x"></i>
                            <h2>{this.state.outras}</h2>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
