import React from 'react';
import PropTypes from 'prop-types';

const CardLineChart = () => {
    return (
        <canvas className="Card LineChart">
            Graphique d'historique
        </canvas>
    )
}

CardLineChart.propTypes = {
    perimeter: PropTypes.string
}

export default CardLineChart;