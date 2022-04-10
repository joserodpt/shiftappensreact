import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Flag from "./flag";

class Dados extends React.Component {

    constructor(props) {
        super(props);
        this.getAdvice();
        this.state = {
            showAdvice: false,
            date1: '',
            injured1: '',
            killed1: '',
            date2: '',
            injured2: '',
            killed2: '',
            date3: '',
            injured3: '',
            killed3: '',
            educationattacks: '',
            healthcareattacks: '',
            refugee1: '',
            refugee2: '',
            refugee3: '',
            refugee1date: '',
            refugee2date: '',
            refugee3date: ''
        }
    }
    getAdvice = () => {
        fetch('https://raw.githubusercontent.com/OCHA-DAP/hdx-scraper-ukraine-viz/main/all.json')
            .then(response => response.json())
            .then((data) => {
                let len = data.timeseries_casualties_data.length
                console.log(data.timeseries_casualties_data[len-1]);

                let splitData1 = (data.timeseries_casualties_data[len-1]["#date"]).toString().split('-')
                let data1 = splitData1[2] + '/' + splitData1[1]
                let splitData2 = (data.timeseries_casualties_data[len-2]["#date"]).toString().split('-')
                let data2 = splitData2[2] + '/' + splitData2[1]
                let splitData3 = (data.timeseries_casualties_data[len-3]["#date"]).toString().split('-')
                let data3 = splitData3[2] + '/' + splitData3[1]

                let len2 = data.refugees_series_data.length

                let splitData1ref = (data.refugees_series_data[len2-1]["#affected+date+refugees"]).toString().split('-')
                let data1ref = splitData1ref[2] + '/' + splitData1ref[1]
                let splitData2ref = (data.refugees_series_data[len2-2]["#affected+date+refugees"]).toString().split('-')
                let data2ref = splitData2ref[2] + '/' + splitData2ref[1]
                let splitData3ref = (data.refugees_series_data[len2-3]["#affected+date+refugees"]).toString().split('-')
                let data3ref = splitData3ref[2] + '/' + splitData3ref[1]

                this.setState({

                    date1: data1,
                    injured1: data.timeseries_casualties_data[len-1]["#affected+injured"],
                    killed1: data.timeseries_casualties_data[len-1]['#affected+killed'],
                    date2: data2,
                    injured2: data.timeseries_casualties_data[len-2]["#affected+injured"],
                    killed2: data.timeseries_casualties_data[len-2]['#affected+killed'],
                    date3: data3,
                    injured3: data.timeseries_casualties_data[len-3]["#affected+injured"],
                    killed3: data.timeseries_casualties_data[len-3]['#affected+killed'],
                    educationattacks: data.national_data[0]["#indicator+attacks+education+num"],
                    healthcareattacks: data.national_data[0]["#indicator+attacks+healthcare+num"],
                    refugee1date: data1ref,
                    refugee1: data.refugees_series_data[len2-1]["#affected+refugees"],
                    refugee2date: data2ref,
                    refugee2: data.refugees_series_data[len2-2]["#affected+refugees"],
                    refugee3date: data3ref,
                    refugee3: data.refugees_series_data[len2-3]["#affected+refugees"],
                    showAdvice: true,
                });
            });
    }
    render() {
        return (

            <div className='container1'>

                <br/><br/>
                <Carousel className='carousel' transitionTime={650} autoPlay={true} infiniteLoop={true} showIndicators={false} interval={5000} statusFormatter={(current) => ''}>
                    <div>
                        <br/><br/><Flag></Flag> Até agora na Ucrânia <Flag></Flag><br/><br />
                        Ataques a escolas: {this.state.educationattacks}<br />
                        Ataques a hospitais: {this.state.healthcareattacks}<br /><br />
                    </div>

                    <div>

                        {this.state.date1}<br />
                        Feridos: {this.state.injured1} | Mortos: {this.state.killed1}<br /><br />
                        {this.state.date2}<br />
                        Feridos: {this.state.injured2} | Mortos: {this.state.killed2}<br /><br />
                        {this.state.date3}<br />
                        Feridos: {this.state.injured3} | Mortos: {this.state.killed3}

                    </div>

                    <div>

                        {this.state.refugee1date}
                        <br /> Refugiados: {this.state.refugee1} <br /><br />
                        {this.state.refugee2date}
                        <br /> Refugiados: {this.state.refugee2} <br /><br />
                        {this.state.refugee3date}
                        <br /> Refugiados: {this.state.refugee3} <br /><br />
                    </div>
                </Carousel>
            </div>


        );
    };
}

export default Dados;