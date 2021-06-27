import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: block;
  background: white;
  max-width: 1280px;
  padding-left: 40px;
  padding-right: 40px;
  margin: auto;
  @media screen and (max-width: 960px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Container = ({ children }) => {
  return (
    <StyledContainer>{children}</StyledContainer>
  )
};

export default Container;

