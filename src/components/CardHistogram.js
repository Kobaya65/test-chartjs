import React from 'react';
import PropTypes from 'prop-types';
import Chart from '../../node_modules/chart.js';
import '../App.css';

class CardHistogram extends React.Component {
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
                    // yAxes: [
                    //     {
                    //         ticks: {
                    //             //calcul des bornes inférieure et supérieure du graph
                    //             min: this.props.data.value.min - ( this.props.data.value.min % 10 ),
                    //             max: this.props.data.value.max + 10 - ( this.props.data.value.max % 10 )
                    //             // min: 350
                    //             // max: 550
                    //         }
                    //     }
                    // ]
                }
            },
            data: {
                labels: this.props.data.map( d => d.time ),
                datasets: [{
                    label: this.props.data[0].perimeter + " : " + this.props.data[0].title,
                    data: this.props.data.map( d => d.value ),
                    fill: 'none',
                    backgroundColor: "black",       //this.props.color,
                    pointRadius: 2,
                    borderColor: "#e9041e",       //this.props.color,
                    borderWidth: 2,
                    lineTension: 0
                }]
            }
        } );
    }

    render() {
        return <canvas ref={this.canvasRef} />;
    }
}

CardHistogram.propTypes = {
    data: PropTypes.array
}

export default CardHistogram;