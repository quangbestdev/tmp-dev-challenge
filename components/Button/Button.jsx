import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  padding-bottom: 16px;
  margin: auto;
  color: #fff;
  background: ${props => props.theme.colors.primary};
  :hover {
    background: #435574;
  }
  ${props => props.width && css`
    width: ${props.width}px;
  `}
  ${props => props.rounded && css`
    border-radius: 50px;
  `}
  border: unset;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    max-width: 912px;
  }

  @media screen and (max-width: 600px) {
    max-width: 100%;
  }
`

const Button = ({ children, ...others }) => {
  return (
    <StyledButton {...others}>{children}</StyledButton>
  )
};

export default Button;

