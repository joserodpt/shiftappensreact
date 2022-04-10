import './App.css';
import React from "react";
import Dados from "./components/dados";
import Searchbar from "./components/searchbar";

function App(){
    return (
        <div className="App center">
            <div className="bandeira">
                <Dados></Dados>
                <Searchbar></Searchbar>
                </div>

            <code>Equipa AlTF4 | ShiftAPPens 22'</code>
        </div>
    );
}

export default App;
