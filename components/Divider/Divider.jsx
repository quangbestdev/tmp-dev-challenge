import React from 'react';
import styled from 'styled-components';

const StyledDivider = styled.div`
  display: block;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid #DEE4E5;
`

const Divider = ({ children }) => {
  return (
    <StyledDivider>{children}</StyledDivider>
  )
};

export default Divider;

