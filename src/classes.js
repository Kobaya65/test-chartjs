import React from 'react';
import './index.css';

import CardHistogram from "./components/CardHistogram";
import CardLineChart from "./components/CardLineChart";
import CardPieChart from "./components/CardPieChart";
import { Progression, Repartition, Distribution } from './dataGeneration';

export default class AppClass extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row sticky-top App-header">

                    <div className="d-flex">
                        <div className="p-2">
                            <a className="navbar-brand" href="#">
                                <img src={`${ process.env.PUBLIC_URL }/images/societe-generale-logo-noir.png`} height="30" className="d-inline-block align-top" alt="logo Société Générale" />
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
                    {<CardPieChart className="PieChart" data={Distribution()} />}
                </div>

                <div className="row group">
                    <h2>Progression</h2>
                </div>
                <div className="row">
                    {<CardLineChart className="LineChart" data={Progression()} />}
                </div>

                <div className="row group">
                    <h2>Répartition</h2>
                </div>
                <div className="row">
                    {<CardHistogram className="Histogram" data={Repartition()} />}
                </div>

                <div className="App-footer row">
                    <p>Pied de page</p>
                </div>
            </div>
        );
    }
}
