import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Services
import getLegendData from '../services/index';

// Components
import MapContainer from '../containers/MapContainer';

const MapView = props => {
  const { items, getIndex } = props;

  const [legendData, setLegendData] = useState(null);

  useEffect(() => {
    getLegendData()
      .then(legendData => {
        const groupByType = legendData.reduce((group, dataSet) => {
          const { type } = dataSet;
          return {
            ...group,
            [type]: dataSet
          };
        }, {})
        setLegendData(groupByType)
      })
  }, []);

  return (
    legendData && (
      <MapContainer legendData={legendData} items={items} getIndex={getIndex} />
    )
  );
}

MapView.propTypes = {
  legendData: PropTypes.instanceOf(Object),
};

MapView.defaultProps = {
  legendData: {},
};

export default MapView;
