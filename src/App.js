import logo from './logo.svg';
import './App.css';
import Componente from "./components/componente";
import React from "react";

function App() {
  return (
      <div className="App">
        <header className="App-header">
            <p>
                <code>Equipa AlTF4 | ShiftAPPens 22'</code>
            </p>
            <body>
            <amarelo><h1>Ukraine Numbers</h1></amarelo>



            <azul><Componente dadoMorte = 'teste'/></azul>
            <Componente dadoMorte = 'uuuu'/>

            </body>
            <img src={logo} className="rodaroda" alt="logo" />
        </header>
      </div>
  );
}

export default App;
