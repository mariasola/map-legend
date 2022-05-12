// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Utils
import mapTheme, { SCREEN_SM } from '../../styles/map-theme'


// Components
import { Span } from '../../components/fontSystem';
import { Toolbar } from '../../elements';


const Choropleth = props => {
  const {
    colorItems,
    ...rest
  } = props;

  const getChoropleth = () => (
    <div style={{ display: 'flex' }}>
      {colorItems.map(({ color, name }) => (
        <StyledStep stepCcolor={color} key={color}>
          <div className="step-color" />
          <Span color={mapTheme.accessibilitiySecondaryColor} className="step-text">
            {name}
          </Span>
        </StyledStep>
      ))}
    </div>
  )

  return (
    <Toolbar
      description={getChoropleth()}
      {...rest}
    />
  )
}

const StyledStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .step-color {
    width: 55px;
    height: 7px;
    background: ${props => props.stepCcolor};
    flex-shrink: 0;
    min-width: 2px;
  }
  .step-text{
    padding-top: 5px;
  }
  @media screen and (max-width: ${SCREEN_SM}px) {
    .step-color {
      width: 42px;
    }
  }
`;

Choropleth.propTypes = {
  colorItems: PropTypes.instanceOf(Array).isRequired,
};

export default Choropleth;