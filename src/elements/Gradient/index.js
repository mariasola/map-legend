// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Utils
import mapTheme from '../../styles/map-theme'

// Components
import { Progress } from 'antd';
import { P, Link } from '../../components/fontSystem';
import { Toolbar } from '../../elements';



const Gradient = props => {
  const {
    subtitle,
    link,
    gradientColors,
    ...rest
  } = props;

  const getGradient = () => {
    const strokeTexts = gradientColors.filter(itemColor => itemColor.name && itemColor.name !== null)
    const colorsArray = gradientColors.map(({ color }) => color);
    const colorsPercentage = colorsArray.reduce((strokeColors, color, index) => {
      return {
        ...strokeColors,
        [(100 / colorsArray.length) * index]: color
      }
    }, {})

    return (
      <Wrapper>
        <Progress
          percent={100}
          strokeColor={colorsPercentage}
          showInfo={false}
        />
        <div className='text-container'>
          <P color={mapTheme.axiscolor}>{strokeTexts[0].name}</P>
          <P color={mapTheme.axiscolor}>{strokeTexts[1].name}</P>
        </div>
        <P color={mapTheme.subtitleColor}>{subtitle}</P>
        <Link href={link} target="_blank">
          Check the data
        </Link>
      </Wrapper>
    )
  }

  return (
    <Toolbar
      description={getGradient()}
      {...rest}
    />
  )
}

const Wrapper = styled.div`
  padding: 0 6px;
  .ant-progress-inner {
    border-radius: 0;
    .ant-progress-bg {
      border-radius: 0;
    }
  }
  .text-container {
    display: flex;
    justify-content: space-between;
    padding-top: 5px;
  }
`;

Gradient.propTypes = {
  gradientColors: PropTypes.instanceOf(Array),
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

Gradient.defaultProps = {
  gradientColors: [],
};

export default Gradient;
