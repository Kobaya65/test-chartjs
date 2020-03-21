import React from 'react';
import './index.css';
import OneChart from "./components/oneChart";
import { Progression, Repartition, Distribution } from './dataGeneration';

export default class MyApp extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar sticky-top flex-md-nowrap app-header">
                    <table style={{ width: "100%" }}>
                        <tr>
                            <td style={{ width: "30%", textAlign: "center" }}>
                                <a href="#">
                                    <img src={`${ process.env.PUBLIC_URL }/images/societe-generale-logo-blanc.png`} height="40em" className="d-inline-block align-top" alt="logo Société Générale" />
                                </a>
                            </td>
                            <td style={{ width: "70%", textAlign: "center" }}>
                                <div className="p-2 align-middle">
                                    KPI Transformation
                                </div>
                            </td>
                        </tr>
                    </table>
                </nav>

                <div className="row group">
                    <h2>Distribution</h2>
                </div>
                <div className="row">
                    {<OneChart data={Distribution()} />}
                </div>

                <div className="row group">
                    <h2>Progression</h2>
                </div>
                <div className="row">
                    {<OneChart data={Progression()} />}
                </div>

                <div className="row group">
                    <h2>Répartition</h2>
                </div>
                <div className="row">
                    {<OneChart data={Repartition()} />}
                </div>

                <div className="app-footer row">
                    <p>Pied de page</p>
                </div>
            </div >
        );
    }
}
