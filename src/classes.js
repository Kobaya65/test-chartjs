import React from 'react';
import './index.css';
import OneChart from "./components/oneChart.js";
import { Progression, Repartition, Distribution } from './dataGeneration';
let kpiDb = require( './backend' );

export default class MyApp extends React.Component {
    render() {
        return (
            <div className="container">
                {/* <div className="container-fluid"></div> */}
                <nav className="navbar sticky-top flex-md-nowrap app-header">
                    <div className="col-md-3">
                        <a href="#" onclick="kpiDb()">
                            <img src={`${ process.env.PUBLIC_URL }/images/societe-generale-logo-blanc.png`} height="40em" className="d-inline-block align-top" alt="logo Société Générale" />
                        </a>
                    </div>
                    <div className="col-md-9 p-2">
                        KPI Transformation
                    </div>
                </nav>

                <div className="row group">
                    <h4>Validated / Not validated Applications as of 12-March-2020</h4>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        {<OneChart data={Distribution()} />}
                    </div>
                    <div className="col-md-4">
                        {<OneChart data={Distribution()} />}
                    </div>
                    <div className="col-md-4">
                        {<OneChart data={Distribution()} />}
                    </div>
                    <div className="col-md-4">
                        {<OneChart data={Distribution()} />}
                    </div>
                    <div className="col-md-4">
                        {<OneChart data={Distribution()} />}
                    </div>
                </div>

                <div className="row group">
                    <h4>Applications in Prod as of 12-March-2020</h4>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        {<OneChart data={Progression()} />}
                    </div>
                    <div className="col-md-4">
                        {<OneChart data={Progression()} />}
                    </div>
                    <div className="col-md-4">
                        {<OneChart data={Progression()} />}
                    </div>
                    <div className="col-md-4">
                        {<OneChart data={Progression()} />}
                    </div>
                    <div className="col-md-4">
                        {<OneChart data={Progression()} />}
                    </div>
                </div>

                <div className="row group">
                    <h4>Applications in Prod as of 12-March-2020 per CDS/CSM</h4>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        {<OneChart data={Repartition()} />}
                    </div>
                    <div className="col-md-4">
                        {<OneChart data={Repartition()} />}
                    </div>
                    <div className="col-md-4">
                        {<OneChart data={Repartition()} />}
                    </div>
                    <div className="col-md-4">
                        {<OneChart data={Repartition()} />}
                    </div>
                    <div className="col-md-4">
                        {<OneChart data={Repartition()} />}
                    </div>
                </div>

                <div className="row app-footer">
                    <p>Pied de page</p>
                </div>
            </div >
        );
    }
}
