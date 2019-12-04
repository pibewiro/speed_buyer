import React, { Component } from 'react'
import axios from "axios"

export default class CategoriasComp extends Component {

    constructor()
    {
        super()

        this.state = {
            categorias:[]
        }
    }

    componentDidMount()
    {
        axios.get("lojas/get_categorias")
        .then(res=>this.setState({categorias:res.data}))
    }

    comparar = idCategoria => {
        this.props.history.push("/comparar_preco", {idCategoria})
    }

    render() {
        return (
            <div className="rowCat">
                {this.state.categorias.map(res=>(
                    <div className="cat-div" onClick={this.comparar.bind(this, res.cat_id_categoria)}>
                        <p>{res.cat_nome}</p>
                    </div>
                ))}
            </div>
        )
    }
}
