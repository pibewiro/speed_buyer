import React, { Component } from 'react'
import Axios from 'axios'

export default class Historico extends Component {

    constructor()
    {
        super()

        this.state = {
            historico:[]
        }
    }

    componentDidMount()
    {
        Axios.get("")
    }
    render() {
        return (
            <div>
                <p>Historico</p>
            </div>
        )
    }
}
