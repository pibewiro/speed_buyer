import React, { Component } from 'react'
import dalben from "./images/dalben.png"
import walmart from "./images/walmart.jpg"

export default class stores extends Component {

    componentDidMount()
    {
        if("jwtToken" in localStorage === false)
        {
            this.props.history.push("/")
        }
    }
    clickShop = store => {
        this.props.history.push(`/items/${store}`)
    }
    render() {
        return (
            <div className="store-cards">
                <div className="store-card">
                    <div className="store-card-header">
                        <h1>Dalben</h1>
                        <a className="btn" href="#" onClick={this.clickShop.bind(this, "Dalben")}>Shop</a>
                    </div>
                    <img src={dalben} alt=""/>
                </div>

                <div className="store-card">
                    <div className="store-card-header">
                        <h1>Wal-Mart</h1>
                        <a className="btn" href="#">Shop</a>
                    </div>
                    <img src={walmart} alt=""/>
                </div>

                <div className="store-card">
                    <div className="store-card-header">
                        <h1>Dalben</h1>
                        <a className="btn" href="#">Shop</a>
                    </div>
                    <img src={dalben} alt=""/>
                </div>

                <div className="store-card">
                    <div className="store-card-header">
                        <h1>Dalben</h1>
                        <a className="btn" href="#">Shop</a>
                    </div>
                    <img src={dalben} alt=""/>
                </div>

                <div className="store-card">
                    <div className="store-card-header">
                        <h1>Dalben</h1>
                        <a className="btn" href="#">Shop</a>
                    </div>
                    <img src={dalben} alt=""/>
                </div>

                <div className="store-card">
                    <div className="store-card-header">
                        <h1>Dalben</h1>
                        <a className="btn" href="#">Shop</a>
                    </div>
                    <img src={dalben} alt=""/>
                </div>

                <div className="store-card">
                    <div className="store-card-header">
                        <h1>Dalben</h1>
                        <a className="btn" href="#">Shop</a>
                    </div>
                    <img src={dalben} alt=""/>
                </div>
            </div>
        )
    }
}
