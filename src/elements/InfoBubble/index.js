// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import { Popover, Space } from 'antd';
import Icon from '@ant-design/icons';

// Assets
import { ReactComponent as infoIcon } from '../../assets/info.svg';
import { ReactComponent as showLayer } from '../../assets/show.svg';


const InfoBubble = props => {
  const { infoContent, eyeContent } = props;
  return (
    <Space>
      <Popover content={eyeContent}>
        <Icon component={showLayer} />
      </Popover>
      <Popover content={infoContent}>
        <Icon component={infoIcon} />
      </Popover>
    </Space>
  );
}

export default InfoBubble;