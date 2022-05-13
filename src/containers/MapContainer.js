import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

// Components
import { LegendComponent } from '../components';


const MapContainer = props => {
  const {
    legendData,
    items,
    getIndex,
  } = props;

  return (
    <Droppable droppableId="droppable" >
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <LegendComponent legendData={legendData} items={items} getIndex={getIndex} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

MapContainer.propTypes = {
  legendData: PropTypes.instanceOf(Object).isRequired,
};

export default MapContainer;
