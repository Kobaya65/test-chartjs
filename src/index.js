import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Chart } from '../node_modules/chart.js';
import { createDataArray } from './dataGeneration.js';
import { valMin, valMax } from './dataGeneration.js';

// ReactDOM.render( <App />, document.getElementById( 'root' ) );

// beginnning new code
Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

// Data generation
function getRandomArray( numItems ) {
    // Create random array of objects
    // let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let names = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';
    let data = [];
    for ( var i = 0; i < numItems; i++ ) {
        data.push( {
            label: names[i],
            value: Math.round( 20 + 80 * Math.random() )
        } );
    }
    return data;
}

function getData() {
    let data = [];

    data.push( {
        title: 'Number of Validated Applications',
        data: createDataArray()
    } );

    data.push( {
        title: 'Categories',
        data: getRandomArray( 15 )
    } );

    return data;
}

// BarChart
class BarChart extends React.Component {
    constructor( props ) {
        super( props );
        this.canvasRef = React.createRef();
    }

    componentDidUpdate() {
        this.myChart.data.labels = this.props.data.map( d => d.label );
        this.myChart.data.datasets[0].data = this.props.data.map( d => d.value );
        this.myChart.update();
    }

    componentDidMount() {
        this.myChart = new Chart( this.canvasRef.current, {
            type: 'bar',
            options: {
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                min: 0,
                                max: 100
                            }
                        }
                    ]
                }
            },
            data: {
                labels: this.props.data.map( d => d.label ),
                datasets: [{
                    label: this.props.title,
                    data: this.props.data.map( d => d.value ),
                    backgroundColor: this.props.color
                }]
            }
        } );
    }

    render() {
        return (
            <canvas ref={this.canvasRef} />
        );
    }
}

// LineChart
class LineChart extends React.Component {
    constructor( props ) {
        super( props );
        this.canvasRef = React.createRef();
    }

    componentDidUpdate() {
        this.myChart.data.labels = this.props.data.map( d => d.time );
        this.myChart.data.datasets[0].data = this.props.data.map( d => d.value );
        this.myChart.update();
    }

    componentDidMount() {
        this.myChart = new Chart( this.canvasRef.current, {
            type: 'line',
            options: {
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                        {
                            type: 'time',
                            time: {
                                unit: 'month'
                            }
                        }
                    ],
                    yAxes: [
                        {
                            ticks: {
                                // calcul des bornes inférieure et supérieure du graph
                                min: valMin - ( valMin % 10 ),
                                max: valMax + 10 - ( valMax % 10 )
                            }
                        }
                    ]
                }
            },
            data: {
                labels: this.props.data.map( d => d.time ),
                datasets: [{
                    label: this.props.title,
                    data: this.props.data.map( d => d.value ),
                    fill: 'none',
                    backgroundColor: this.props.color,
                    pointRadius: 2,
                    borderColor: this.props.color,
                    borderWidth: 1,
                    lineTension: 0
                }]
            }
        } );
    }

    render() {
        return <canvas ref={this.canvasRef} />;
    }
}

// Doughnut
class DoughnutChart extends React.Component {
    constructor( props ) {
        super( props );
        this.canvasRef = React.createRef();
    }

    componentDidUpdate() {
        this.myChart.data.labels = this.props.data.map( d => d.label );
        this.myChart.data.datasets[0].data = this.props.data.map( d => d.value );
        this.myChart.update();
    }

    componentDidMount() {
        this.myChart = new Chart( this.canvasRef.current, {
            type: 'doughnut',
            options: {
                maintainAspectRatio: false
            },
            data: {
                labels: this.props.data.map( d => d.label ),
                datasets: [{
                    data: this.props.data.map( d => d.value ),
                    backgroundColor: this.props.colors
                }]
            }
        } );

    }


    render() {
        return <canvas ref={this.canvasRef} />;
    }
}


// App
class AppClass extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            data: getData()
        };
    }

    render() {
        return (
            <div className="App">
                <div className="main chart-wrapper">
                    <LineChart
                        data={this.state.data[0].data}
                        title={this.state.data[0].title}
                        color="#3E517A"
                    />
                </div>
                {/* <div className="sub chart-wrapper">
                    <BarChart
                        data={this.state.data[2].data}
                        title={this.state.data[2].title}
                        color="#B08EA2"
                    />
                </div>
                <div className="sub chart-wrapper">
                    <DoughnutChart
                        data={this.state.data[3].data}
                        title={this.state.data[3].title}
                        colors={['#a8e0ff', '#8ee3f5', '#70cad1', '#3e517a', '#b08ea2', '#BBB6DF']}
                    />
                </div> */}
            </div>
        );
    }
}

ReactDOM.render( <AppClass />, document.getElementById( 'root' ) );
// ReactDOM.render( <App />, document.getElementById( 'root' ) );
// finnishing new code

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
