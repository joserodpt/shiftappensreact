import React, { Component } from "react";

function getDados() {
    return fetch('https://raw.githubusercontent.com/OCHA-DAP/hdx-scraper-ukraine-viz/main/all.json')
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            console.error(error);
        });
}

class Dados extends Component {

    constructor() {
        super()
        this.state = {
            texto: 'Clica-me daddy'
        }
    }


    render() {
        const dados = getDados()

        console.log(dados)

        return <h1>asd</h1>
    }
}

export default Dados