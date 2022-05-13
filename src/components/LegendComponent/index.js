import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import { Basic, Gradient, Choropleth, Timeline } from '../../elements';

const LegendComponent = props => {
  const {
    legendData,
    items,
    getIndex,
  } = props;

  const [hasChanged, setIndexChange] = useState(false);

  const gradientData = legendData.gradient;
  const choroplethData = legendData.choropleth;
  const basicData = legendData.basic;
  const timelineData = legendData.timeline;

  // const getIndex = id => {
  //   const isItemPresent = items.find(item => item.id === id)
  //   console.log('isItemPresent', isItemPresent)
  //   if (isItemPresent) {
  //     setIndexChange(true)
  //   }
  //   return isItemPresent.index
  // }

  return items && (
    <Wrapper>
      <Gradient
        index={(items > 0) ? () => getIndex(gradientData.id) : 1}
        id={gradientData.id}
        title={gradientData.name}
        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies, metus ut 
        sagittis aliquam, arcu nibh ornare quam, eu molestie eros tellus at leo.'
        gradientColors={gradientData.items}
        link='https://raw.githubusercontent.com/Vizzuality/front-end-code-challenge/master/data.json'
        infoDescription={gradientData.description}
      />
      <Choropleth
        index={(items > 0) ? getIndex(choroplethData.id) : 2}
        id={choroplethData.id}
        title={choroplethData.name}
        colorItems={choroplethData.items}
        infoDescription={choroplethData.description}
      />
      <Basic
        index={(items > 0) ? getIndex(basicData.id) : 3}
        id={basicData.id}
        title={basicData.name}
        basicItems={basicData.items}
        infoDescription={basicData.description}
      />
      <Timeline
        index={(items > 0) ? getIndex(timelineData.id) : 4}
        id={timelineData.id}
        title={timelineData.name}
        timeline={timelineData.timeline}
        infoDescription={timelineData.description}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    width: 520px;
    height: 500px;
  }
`;

LegendComponent.propTypes = {
  legendData: PropTypes.instanceOf(Object),
};

LegendComponent.defaultProps = {
  legendData: {},
};

export default LegendComponent;
