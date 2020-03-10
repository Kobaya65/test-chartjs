import React from 'react';
import './index.css';
import { Chart } from '../node_modules/chart.js';

import CardHistogram from "./components/CardHistogram";
// import CardLineChart from "./components/CardLineChart";
// import CardPieChart from "./components/CardPieChart";
import { createDataArray1 } from './dataGeneration';

export default class AppClass extends React.Component {
    render() {
        return (
            // <div className="App">
            //     <div className="main chart-wrapper">
            //         <LineChart
            //             data={this.state.data[0].data}
            //             title={this.state.data[0].title}
            //             color="#FE0000"
            //         />
            //     </div>
            // </div>
            <div className="container-fluid">
                <div className="row sticky-top App-header">

                    <div className="d-flex">
                        <div className="p-2">
                            <a className="navbar-brand" href="#">
                                <img src={"../public/images/societe-generale-logo-noir.png"} height="30" className="d-inline-block align-top" alt="logo société générale" />
                            </a>
                        </div>
                        <div className="p-2 align-middle">
                            KPI Transformation
                        </div>
                    </div>
                </div>

                <div className="row group">
                    <h2>Distribution</h2>
                </div>
                <div className="row">
                    {
                        <CardHistogram className="LineChart" data={createDataArray1()} />
                        //    perimeters0.map( perimeter => (
                        //         <CardHistogram perimeter={perimeter.name} />
                        //     ) )
                    }
                </div>

                {/* <div className="row group">
                    <h2>Répartition</h2>
                </div>
                <div className="row">
                    {
                        this.props.map( perimeter => ( <CardHistogram perimeter={perimeter.name} /> ) )
                        // perimeters0.map( perimeter => (
                        //     <CardPieChart perimeter={perimeter.name} />
                        // ) )
                    }
                </div>

                <div className="row group">
                    <h2>Progression</h2>
                </div>
                <div className="row">
                    {
                        this.props.map( perimeter => ( <CardHistogram perimeter={perimeter.name} /> ) )
                        // perimeters0.map( perimeter => (
                        //     <CardLineChart perimeter={perimeter.name} />
                        // ) )
                    }
                </div> */}

                <div className="App-footer row">
                    <p>Pied de page</p>
                </div>
            </div>
        );
    }
}
