import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  color: white;
  width: 100%;
  height: 50px;
  z-index: 90;
  background-color: ${({ theme: { colors } }) => colors.atlantis};
  box-shadow: ${({ theme }) => theme.shadow};
`;

const Nav = styled.nav``;

const Ul = styled.ul`
  margin-block: 0;
  padding-inline: 0;
  list-style: none;
`;

const Li = styled.li`
  display: inline-block;
  margin: 0 0.5rem;
  cursor: pointer;
`;

const Link = styled(NavLink)`
  color: black;

  &.active {
    text-decoration: underline;
  }

  @media (hover: hover) {
    :hover {
      color: ${({ theme: { colors } }) => colors.tonysPink};
    }
  }
`;

const Navbar: React.FC = () => {
  return (
    <Header>
      <Nav>
        <Ul>
          <Li>
            <Link exact to="/">
              Home
            </Link>
          </Li>
          <Li>
            <Link to="characters">Characters</Link>
          </Li>
        </Ul>
      </Nav>
    </Header>
  );
};

export default Navbar;
