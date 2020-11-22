import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navigation/Navbar';

const Main = styled.main`
  width: 95%;
  position: absolute;
  margin: auto;
  top: 62px;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 1rem;
  box-sizing: border-box;

  @media ${({ theme: { mediaQueries } }) => mediaQueries.large} {
    width: 75%;
  }
`;

const withLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
    </>
  );
};

export default withLayout;
