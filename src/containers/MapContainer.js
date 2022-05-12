import React from 'react';
import PropTypes from 'prop-types';

// Components
import { LegendComponent } from '../components';


const MapContainer = props => {
  const {
    legendData,
  } = props;

  return (
    <LegendComponent legendData={legendData} />
  );
}

MapContainer.propTypes = {
  legendData: PropTypes.instanceOf(Object).isRequired,
};

export default MapContainer;
