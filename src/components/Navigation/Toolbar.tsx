import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import NavItems from './NavItems/NavItems';
import SideBarToggle from './SideBar/SideBarToggle/SideBarToggle';

const Header = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding: 0 0.5rem;
  z-index: 90;
  background-color: ${({ theme: { colors } }) => colors.atlantis};
  box-shadow: ${({ theme }) => theme.shadow};
`;

const Nav = styled.nav`
  display: none;

  @media ${({ theme: { mediaQueries } }) => mediaQueries.small} {
    display: block;
  }
`;

interface Props {
  sideBarToggleClicked: (event: MouseEvent<HTMLInputElement>) => void;
}

const Toolbar: React.FC<Props> = ({ sideBarToggleClicked }) => {
  return (
    <Header>
      <SideBarToggle clicked={sideBarToggleClicked} />
      <Nav>
        <NavItems />
      </Nav>
    </Header>
  );
};

export default Toolbar;
