import React, { MouseEvent } from 'react';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

interface Props {
  show?: boolean;
  clicked: (event: MouseEvent<HTMLInputElement>) => void;
}

const Backdrop: React.FC<Props> = ({ show, clicked }) => {
  return show ? <StyledBackdrop onClick={clicked} /> : null;
};

Backdrop.defaultProps = {
  show: false,
};

export default Backdrop;
