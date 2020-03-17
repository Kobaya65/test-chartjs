import React from 'react';
import './index.css';

import OneChart from "./components/oneChart";
import { Progression, Repartition, Distribution } from './dataGeneration';

export default class MyApp extends React.Component {
    render() {
        return (
            // <div className="container-fluid">
            <div>
                <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 App-header">
                    <div className="d-flex">
                        <a className="navbar-brand" href="#">
                            <img src={`${ process.env.PUBLIC_URL }/images/societe-generale-logo-blanc.png`} height="30" className="d-inline-block align-top" alt="logo Société Générale" />
                            {/* <img src={`../public/images/societe-generale-logo-blanc.png`} height="30" className="d-inline-block align-top" alt="logo Société Générale" /> */}
                        </a>
                        <div className="p-2 align-middle">
                            KPI Transformation
                        </div>
                    </div>
                </nav>

                <div className="row group">
                    <h2>Distribution</h2>
                </div>
                <div className="row">
                    {<OneChart className="PieChart" data={Distribution()} />}
                </div>

                <div className="row group">
                    <h2>Progression</h2>
                </div>
                <div className="row">
                    {<OneChart className="LineChart" data={Progression()} />}
                </div>

                <div className="row group">
                    <h2>Répartition</h2>
                </div>
                <div className="row">
                    {<OneChart className="Histogram" data={Repartition()} />}
                </div>

                <div className="App-footer row">
                    <p>Pied de page</p>
                </div>
            </div>
        );
    }
}
