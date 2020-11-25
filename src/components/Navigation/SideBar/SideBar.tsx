import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import Backdrop from '../../Shared/Backdrop';
import NavItems from '../NavItems/NavItems';

const StyledSideBar = styled.div<{ open: boolean }>`
  position: fixed;
  width: 280px;
  max-width: 45%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 55px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;

  @media ${({ theme: { mediaQueries } }) => mediaQueries.small} {
    display: none;
  }

  transform: ${(p) => (p.open ? 'translateX(0)' : 'translateX(-105%)')};
`;

interface Props {
  open: boolean;
  closed: (event: MouseEvent<HTMLInputElement>) => void;
}

const SideBar: React.FC<Props> = ({ open, closed }) => {
  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <StyledSideBar open={open}>
        <nav>
          <NavItems />
        </nav>
      </StyledSideBar>
    </>
  );
};

export default SideBar;
