// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import { P } from '../../components/fontSystem';
import { Toolbar } from '../../elements';


const Basic = props => {
  const {
    basicItems,
    ...rest
  } = props;


  const getBasic = () => (
    <ul style={{ paddingLeft: '25px', marginBottom: 0 }}>
      {basicItems.map(({ color, name }) => (
        <StyledLi color={color} key={color}>
          <span className="dot"></span>
          <P>{name}</P>
        </StyledLi>
      ))}
    </ul>
  )

  return (
    <Toolbar
      description={getBasic()}
      {...rest}
    />
  )
}

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  padding: 3px 0;
  .dot {
    height: 12px;
    width: 12px;
    background-color: ${props => props.color};
    border-radius: 5.5px;
    display: inline-block;
  }
  p {
    margin-bottom: 0;
    padding-left: 5px;
  }
`;

Basic.propTypes = {
  basicItems: PropTypes.instanceOf(Array).isRequired,
};

export default Basic;