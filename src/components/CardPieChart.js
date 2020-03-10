import React from 'react';
import PropTypes from 'prop-types';

const CardPieChart = () => {
    return (
        <canvas className="Card LineChart">
            Graphique camembert
        </canvas>
    )
}

CardPieChart.propTypes = {
    perimeter: PropTypes.string
}

export default CardPieChart;