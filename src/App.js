// Libraries
import React, { useState } from 'react';
import 'antd/dist/antd.min.css'
import { DragDropContext } from 'react-beautiful-dnd';

// Components
import MapView from './views/MapView';

//Dependecies
import GlobalStyle from './styles/globalStyle';

const App = () => {

  const [items, setItems] = useState([]);

  const onDragStart = result => {
    const { source, draggableId } = result;
    const clicked = [
      ...items,
      {
        draggableId,
        source: source.index,
      },
    ]
    console.log('start', clicked)
    setItems(clicked)

  }

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    // nothing to do
    if (!destination) {
      return;
    }
    const cleanItems = items.filter(item => item.draggableId !== draggableId)
    const newItems = [
      ...cleanItems,
      {
        draggableId,
        source: source.index,
        destination: destination.index
      },
    ];
    setItems(newItems)
    getIndex(draggableId)

    // if (newItems === items) {
    //   console.log('Holaaaa')

    // }
    // console.log('newItems', newItems)
    // if (items || newItems) {
    //   console.log('hola')
    //   getIndex(draggableId)
    // }
  };

  const getIndex = id => {
    console.log('items getIndex', items)
    console.log('id getIndex', typeof id)
    const isItemPresent = items && items.find(item => item.draggableId === id)
    console.log('isItemPresent', isItemPresent)
    console.log('destination', isItemPresent.destination)
    return isItemPresent.destination
  }

  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <div className="App">
        <GlobalStyle />
        <MapView items={items} getIndex={getIndex} />
      </div>
    </DragDropContext>
  );
}

export default App;
