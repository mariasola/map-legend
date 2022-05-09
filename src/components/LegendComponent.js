import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// Components
import { Toolbar } from '../elements';

const LegendComponent = props => {
  const {
    legendData,
  } = props;
  return (
    <Wrapper>
      <Toolbar legendData={legendData} />
    </Wrapper>
  )
}

const cssColor = css`${({ color }) => color || '#000000'}`;

const Wrapper = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    width: 520px;
    height: 500px;
    // box-shadow: 0px 0px 0px ${({ active }) => (active ? 3 : 1)}px ${cssColor};
  }
`;

export default LegendComponent;
