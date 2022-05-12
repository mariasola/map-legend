import styled, { css } from 'styled-components';

const boldStyle = css`
  font-weight: 700;
`;

const semiBoldStyle = css`
  font-weight: 600;
`;

const fontWeightStyle = css`
  ${props => props.semibold && semiBoldStyle};
  ${props => props.bold && boldStyle};
`;

const fontStyle = css`
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  ${fontWeightStyle};
`;

const commonStyle = css`
  margin-bottom: ${props => (props.nomargin ? 0 : '10px')};
  ${fontStyle};
`;

const H1 = styled.h1`
  ${commonStyle}
  ${boldStyle}
  color: ${props => props.color || props.theme.mainColor};
  font-size: 20px;
  line-height: 30px;

  ${props => props.tacenter && css`
    text-align: center;
  `}

  ${props => props.taright && css`
    text-align: right;
  `}
`;

const H2 = styled.h2`
  ${boldStyle}
  color: ${props => props.color || props.theme.mainColor};
  font-size: 14px;
  line-height: 18px;
  margin-bottom: ${props => props.mb || '0 !important'};
  ${commonStyle}

  ${props => props.tacenter && css`
    text-align: center;
  `}

  ${props => props.taright && css`
    text-align: right;
  `}
`;

const H3 = styled.h3`
  ${commonStyle}
  color: ${props => props.color || props.theme.mainColor};
  font-size: 12px;
  line-height: 16px;
  margin-bottom: ${props => props.mb || 0};
`;

const P = styled.p`
  ${commonStyle}

  color: ${props => props.color || props.theme.protestSecondaryColor};
  font-size: 12px;
  line-height: 15px;
  font-style:  ${props => props.em && 'italic'};

  ${props => props.tacenter && css`
    text-align: center;
  `}

  ${props => props.taright && css`
    text-align: right;
  `}

  ${props => props.mb0 && css`
    margin-bottom: 0;
  `}
`;

const Link = styled.a`
  ${commonStyle}

  color: ${props => props.color || props.theme.linkColor};
  font-size: 12px;
  line-height: 15px;
`;

const Span = styled.span`
  color: ${props => props.color || props.theme.protestSecondaryColor};
  font-size: 12px;
  line-height: 15px;
  ${({ wrapText }) => wrapText && css`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `}
  ${props => props.semibold && semiBoldStyle};
  ${props => props.bold && boldStyle};
`;


export {
  boldStyle,
  commonStyle,
  fontWeightStyle,
  H1,
  H2,
  H3,
  P,
  semiBoldStyle,
  Link,
  Span,
};
