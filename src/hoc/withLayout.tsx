import React, { useState } from 'react';
import styled from 'styled-components';
import SideBar from '../components/Navigation/SideBar/SideBar';
import Toolbar from '../components/Navigation/Toolbar';

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

interface Props {
  children: React.ReactNode;
}

const WithLayout: React.FC<Props> = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false); // TODO: rebuild with useContext()

  const sideBarHandler = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <>
      <Toolbar sideBarToggleClicked={sideBarHandler} />
      <SideBar open={showSideBar} closed={sideBarHandler} />
      <Main>{children}</Main>
    </>
  );
};

export default WithLayout;
