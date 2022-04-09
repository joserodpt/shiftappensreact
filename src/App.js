import logo from './logo.svg';
import './App.css';
import React from "react";
import Dados from "./components/dados";

function App(){



    return (

        <div className="App center">

                <div className="bandeira">
                    <h3>
                    <p>
                        <code>Equipa AlTF4 | ShiftAPPens 22'</code>
                    </p>
                    <h3 className="displayUKR">Ukraine Numbers</h3>

                    <Dados></Dados>

                    <azul><p1>teste</p1></azul>
                    <img src={logo} className="rodaroda" alt="logo" />
                </h3>

                </div>



        </div>
    );
}

export default App;
