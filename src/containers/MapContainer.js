import React from 'react';
import PropTypes from 'prop-types';

// Services


// Components
import LegendComponent from '../components/LegendComponent';


const MapContainer = props => {
  const {
    legendData,
  } = props;

  console.log('legendData', legendData);
  return (
    <LegendComponent legendData={legendData} />
  );
}

MapContainer.propTypes = {
  legendData: PropTypes.instanceOf(Object).isRequired,
};

export default MapContainer;
