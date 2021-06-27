import React from 'react';
import styled, { css } from 'styled-components';

const StyledCategoryTab = styled.span`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  padding: 6px 11px;
  margin: 0 8px;
  color: #181818;
  background: #DDDDDD;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  line-height: 14.22px;
  font-weight: 500;
  text-transform: uppercase;
  :hover {
    background: #6AEBFD
  }
  ${props => props.selected && css`
    background: #46e6fc;
  `}
`

const CategoryTab = ({ children, selected, onClick, ...others }) => {
  return (
    <StyledCategoryTab selected={selected} onClick={onClick} {...others}>{children}</StyledCategoryTab>
  )
};

export default CategoryTab;

