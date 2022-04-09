import React, { Component } from "react";

class Componente extends Component {

    constructor() {
        super()
        this.state = {
            texto: 'Clica-me daddy'
        }
        this.count = 0
        this.sheesh =  false
    }

    doButton() {
            this.setState({
                texto: this.count
            })

        console.log("Tua mae")

        this.count++
    }


    render() {
        const {textoBotao} = this.props
        return (
        <div>
            <h1>{this.state.texto}</h1>
            <button onClick={() => this.doButton()}>{textoBotao}</button>
        </div>
    )
    }
}

export default Componente