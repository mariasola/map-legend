import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Utils
import { SCREEN_SM } from '../../styles/map-theme'

// Components
import { Collapse, Space, Modal } from 'antd';
import InfoBubble from '../InfoBubble'
import Icon from '@ant-design/icons';
import { H2, P } from '../../components/fontSystem';

// Assets
import { ReactComponent as arrowDown } from '../../assets/arrow-down.svg';
import { ReactComponent as dragDots } from '../../assets/drag-dots.svg';

const { Panel } = Collapse;

const Toolbar = props => {
  const { id, title, description, infoDescription } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLayerVisible, setIsLayerVisible] = useState(false);

  const handleModalClick = e => {
    e.stopPropagation();
    setIsModalVisible(!isModalVisible);
  }

  const handleEyelClick = e => {
    e.stopPropagation();
    setIsLayerVisible(!isLayerVisible);
  }


  const getExtraIcons = () => {
    const eyeContent = isLayerVisible ? 'Hide layer' : 'Show layer';
    const infoContent = 'Layer Info'
    return (
      <InfoBubble
        eyeTooltipContent={eyeContent}
        onEyeClick={handleEyelClick}
        infoTooltipContent={infoContent}
        onInfoClick={handleModalClick}
      />
    )
  }

  const getHeader = () => (
    <Space size={9.4}>
      <Icon component={dragDots} />
      <H2>
        {title}
      </H2>
    </Space>
  )


  return (
    <>
      <StyledCollapse
        bordered={false}
        expandIcon={({ isActive }) => <Icon component={arrowDown} rotate={!isActive ? -180 : 0} />}
        expandIconPosition="right"
      >
        <Panel
          header={getHeader()}
          extra={getExtraIcons()}
          key={id}
        >
          {description}
        </Panel>
      </StyledCollapse>
      <StyledModal visible={isModalVisible} onCancel={handleModalClick} footer={null}>
        <P dangerouslySetInnerHTML={{ __html: infoDescription }} />
      </StyledModal>
    </>
  )
}

const StyledCollapse = styled(Collapse)`
  border: 1px solid rgba(0, 0, 0, 0.03);
  .ant-collapse-header {
    padding: 15px 40px 15px 15px !important;
  }
  .ant-collapse-content-box {
    padding: 10px;
  }
  @media screen and (max-width: ${SCREEN_SM}px) {
    .ant-space-align-center {
      align-items: flex-start;
  }
}
`

const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 4px;
    box-shadow: 0 2px 8px 0 rgb(202,178,214,0.5);
    padding: 15px;
  }
  li {
    padding: 5px;
  }
`;

Toolbar.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  infoDescription: PropTypes.string.isRequired,
};

export default Toolbar;
