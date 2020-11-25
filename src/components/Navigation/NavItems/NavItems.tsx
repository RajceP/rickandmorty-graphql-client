import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem/NavItem/NavItem';

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  height: 100%;

  @media ${({ theme: { mediaQueries } }) => mediaQueries.small} {
    flex-flow: row;
  }
`;

const NavItems: React.FC = () => {
  return (
    <nav>
      <Ul>
        <NavItem to="/" exact>
          Home
        </NavItem>
        <NavItem to="characters">Characters</NavItem>
        <NavItem to="locations">Locations</NavItem>
        <NavItem to="episodes">Episodes</NavItem>
      </Ul>
    </nav>
  );
};

export default NavItems;
