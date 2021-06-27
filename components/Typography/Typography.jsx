import React from 'react';
import styled, { css } from 'styled-components';

const StyledTypography = styled.h1`
  font-size: 20px;
  line-height: 26px;
  font-weight: 400;
  color: #242424;
  ${props => props.variant == 'h1' && css`
    font-size: 48.83px;
    line-height: 63.48px;
    font-weight: 600;
  `}
  ${props => props.variant == 'h2' && css`
    font-size: 39.06px;
    line-height: 34px;
    font-weight: 600;
  `}
  ${props => props.variant == 'h3' && css`
    font-size: 31.25px;
    line-height: 40.63px;
    font-weight: 600;
  `}
  ${props => props.variant == 'h4' && css`
    font-size: 25px;
    line-height: 32.5px;
    font-weight: 600;
  `}
  ${props => props.variant == 'body1' && css`
    font-size: 16px;
    line-height: 30px;
    font-weight: 600;
  `}
  ${props => props.variant == 'body2' && css`
    font-size: 14px;
    line-height: 30px;
    font-weight: 600;
  `}
  ${props => props.color == 'secondary' && css`
    color: ${props.theme.typography.secondary}
  `}
  ${props => props.color == 'textSecondary' && css`
    color: ${props.theme.typography.textSecondary}
  `}
  
`

const Typography = ({ variant, color, children, className, ...others }) => {
  return <StyledTypography variant={variant} color={color} className={className}>{children}</StyledTypography>
}

export default Typography;