import React from 'react';
import PropTypes from 'prop-types';
import Chart from '../../node_modules/chart.js';
import '../App.css';

class CardLineChart extends React.Component {
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
        this.myChart = new Chart( this.canvasRef.current, this.props.data );
    }

    render() {
        return <canvas ref={this.canvasRef} />;
    }
}

CardLineChart.propTypes = {
    data: PropTypes.array
}

export default CardLineChart;