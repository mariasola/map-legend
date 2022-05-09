import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Collapse, Space } from 'antd';
import InfoBubble from '../InfoBubble'
import Icon from '@ant-design/icons';

// Assets
import { ReactComponent as arrowDown } from '../../assets/arrow-down.svg';
import { ReactComponent as dragDots } from '../../assets/drag-dots.svg';

const { Panel } = Collapse;

const Toolbar = () => {
  const onChange = key => {
    console.log('key', key)
  }

  const clicked = true;
  const getExtraIcons = () => {
    const eyeContent = clicked ? 'Hide layer' : 'Show layer';
    const infoContent = 'Layer Info'
    return (
      <InfoBubble eyeContent={eyeContent} infoContent={infoContent} />
    )
  }

  const getHeader = () => (
    <Space>
      <Icon component={dragDots} />
      <p>
        Este es el titulo
      </p>
    </Space>
  )

  return (
    <>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => <Icon component={arrowDown} rotate={!isActive ? -180 : 0} />}
        expandIconPosition="right"
        onChange={onChange}
      >
        <Panel header={getHeader()} key="1" extra={getExtraIcons()}>
          <p>requires a peer of typescript</p>
        </Panel>
      </Collapse>
    </>
  )

}

export default Toolbar;
