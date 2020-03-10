import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppClass from './classes';
import * as serviceWorker from './serviceWorker';
import { Chart } from '../node_modules/chart.js';
import { createDataArray1, createDataArray2 } from './dataGeneration.js';

Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

export function getData() {
    let data = [];

    data.push( {

        title: 'Number of Validated Applications in 2019',
        data: createDataArray1()
    } );

    data.push( {
        title: 'Number of Validated Applications in 2018',
        data: createDataArray2()
    } );

    return data;
}

ReactDOM.render( <AppClass />, document.getElementById( 'root' ) );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
