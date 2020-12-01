import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Li = styled.li`
  display: inline-block;
  margin: 0 0.5rem;
  cursor: pointer;
`;

const Link = styled(NavLink)`
  color: black;

  &.active {
    // TODO: Nicer!
    text-decoration: underline;
  }

  @media (hover: hover) {
    :hover {
      color: ${({ theme: { colors } }) => colors.tonysPink};
    }
  }
`;

interface Props {
  to: string;
  exact?: boolean;
  children: React.ReactNode;
}

const defaultProps = {
  exact: false,
};

const NavItem: React.FC<Props> = ({ to, exact, children }) => {
  return (
    <Li>
      <Link exact={exact} to={to}>
        {children}
      </Link>
    </Li>
  );
};

NavItem.defaultProps = defaultProps;

export default NavItem;
