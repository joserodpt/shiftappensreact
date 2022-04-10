import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete';

import 'reactjs-popup/dist/index.css';


class Searchbar extends React.Component {

    constructor(props) {
        super(props);
        this.getAdvice();
        this.state = {
            options: null,
            selecionada: '',
            feridos: '',
            mortos: '',
            refugiados: '',
            data: null,
        }
    }


    getAdvice = () => {
        fetch('https://raw.githubusercontent.com/OCHA-DAP/hdx-scraper-ukraine-viz/main/all.json')
            .then(response => response.json())
            .then((data) => {
               var aaa = []

                let len = data.timeseries_casualties_data.length

                for (const x of Array(len).keys()) {
                    aaa.push(data.timeseries_casualties_data[x]["#date"])
                }

                //aaa.reverse()

                this.setState({
                    data: data,
                    options: aaa,
                });
            });
    }


    doCenas = (event, child) => {
        let len = this.state.data.timeseries_casualties_data.length

        for (const x of Array(len).keys()) {

            if (this.state.data.timeseries_casualties_data[x]["#date"] === child)
            {
                this.setState({
                    selecionada: child,
                    feridos: this.state.data.timeseries_casualties_data[x]["#affected+injured"],
                    mortos: this.state.data.timeseries_casualties_data[x]['#affected+killed'],
                    refugiados: this.state.data.refugees_series_data[x]["#affected+refugees"],
                });
            }

        }



    };

    render() {
        return (
            <div  className='container2'>

                <Autocomplete
                              options={this.state.options}
                              style={{ width: 300 }}
                              onChange={this.doCenas}
                              renderInput={(params) =>
                                  <TextField {...params}  label="Datas" variant="outlined" inputStyle={{backgroundColor: 'white'}} />}
                />


                Data selecionada: {this.state.selecionada}<br/>
                Feridos: {this.state.feridos}<br />
                Mortos: {this.state.mortos}<br/>
                Refugiados: {this.state.refugiados}<br/>
            </div>
        );
    };
}

export default Searchbar;