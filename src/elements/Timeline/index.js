// Libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import { Slider } from 'antd';
import { P } from '../../components/fontSystem';
import { Toolbar } from '../../elements';


const Timeline = props => {
  const {
    timeline,
    ...rest
  } = props;

  const maxDate = new Date(timeline.maxDate).getFullYear();
  const minDate = new Date(timeline.minDate).getFullYear();
  const marks = {
    [minDate]: minDate,
    [maxDate]: maxDate,
  };

  //in a real App probably would pass this to the parent and update backend, but as it is a mockup
  // I am creating a sate to save it.
  const [range, setRange] = useState([2007, 2012]);

  const getTimeline = () => {

    const onChangeDate = value => {
      setRange(value)
    }

    return (
      <StyledSlider
        range
        marks={marks}
        max={maxDate}
        min={minDate}
        defaultValue={range}
        trackStyle={{ backgroundColor: '#CAB2D6' }}
        handleStyle={{
          background: '#CAB2D6',
          borderRadius: '5.5px',
          border: null,
          width: '12px',
          height: '12px',
        }}
        onAfterChange={onChangeDate}
      />
    )
  }

  return (
    <Toolbar
      description={getTimeline()}
      {...rest}
    />
  )
}

const StyledSlider = styled(Slider)`
  .ant-slider-dot {
    border: 0;
    width: 0px;
    height: 0px;
  }
  .ant-slider-handle:not(.ant-tooltip-open){
    border-color: #CAB2D6 !important;
  }
  .ant-slider-handle:focus {
    box-shadow: 0 0 0 5px rgb(202,178,214,12%) !important;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }
  .ant-tooltip-open {
    border-color: #CAB2D6;
  }
  .ant-slider-rail {
    width: 99%;
  }
  .ant-slider-mark {
    left: 16px;
    width: 93%;
    font-size: 14px;
    font-size: 12px;
    line-height: 15px;
  }
`;

Timeline.propTypes = {
  timeline: PropTypes.instanceOf(Object).isRequired,
};

export default Timeline;
