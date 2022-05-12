// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Utils
import { SCREEN_MD } from '../../styles/map-theme'

// Components
import { Popover, Space } from 'antd';
import Icon from '@ant-design/icons';

// Assets
import { ReactComponent as infoIcon } from '../../assets/info.svg';
import { ReactComponent as showLayer } from '../../assets/show.svg';


const InfoBubble = props => {
  const { infoTooltipContent, eyeTooltipContent, onInfoClick, onEyeClick } = props;
  return (
    <Space size={10}>
      <StyledPopover content={eyeTooltipContent} onClick={onEyeClick}>
        <Icon component={showLayer} style={{ width: '16px', height: '11px' }} />
      </StyledPopover>
      <StyledPopover content={infoTooltipContent} onClick={onInfoClick}>
        <Icon component={infoIcon} />
      </StyledPopover>
    </Space>
  );
}

const StyledPopover = styled(Popover)`
  @media screen and (max-width: ${SCREEN_MD}px) {
    .ant-popover {
      display: none !important;
    }
  }
`;

InfoBubble.propTypes = {
  infoTooltipContent: PropTypes.string.isRequired,
  eyeTooltipContent: PropTypes.string.isRequired,
  onInfoClick: PropTypes.func.isRequired,
  onEyeClick: PropTypes.func.isRequired,
};

export default InfoBubble;