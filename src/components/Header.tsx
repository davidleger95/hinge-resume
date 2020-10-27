import React, { FC } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background: #fff;
  padding: 1rem;
  z-index: 9999;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  margin: 0;
  text-align: center;
`;

const Header: FC = () => (
  <StyledHeader>
    <Title>David Leger</Title>
  </StyledHeader>
);

export default Header;
