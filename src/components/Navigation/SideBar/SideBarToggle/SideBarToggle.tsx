import React, { MouseEvent } from 'react';
import styled from 'styled-components';

const StyledDrawerToggle = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;

  div {
    width: 90%;
    height: 3px;
    background-color: black;
  }

  @media ${({ theme: { mediaQueries } }) => mediaQueries.small} {
    display: none;
  }
`;

interface Props {
  clicked: (event: MouseEvent<HTMLInputElement>) => void;
}

const SideBarToggle: React.FC<Props> = ({ clicked }) => (
  <StyledDrawerToggle onClick={clicked}>
    <div />
    <div />
    <div />
  </StyledDrawerToggle>
);

export default SideBarToggle;
