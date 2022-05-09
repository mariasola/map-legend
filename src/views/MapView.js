import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Services
import getLegendData from '../services/index';

// Components
import MapContainer from '../containers/MapContainer';

const MapView = () => {
  const [legendData, setLegendData] = useState([]);
  useEffect(() => {
    getLegendData().then(legendData => {
      setLegendData(legendData);
    });
  }, []);

  return (
    <MapContainer legendData={legendData} />
  );
}

MapView.propTypes = {
  legendData: PropTypes.instanceOf(Object),
};

MapView.defaultProps = {
  legendData: {},
};

export default MapView;
