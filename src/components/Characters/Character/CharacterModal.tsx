import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import Backdrop from '../../Shared/Backdrop';

const StyledModal = styled.div<{ open: boolean }>`
  display: ${(p) => (p.open ? 'block' : 'none')};
  position: fixed;
  z-index: 500;
  width: 50%;
  padding: 16px;
  left: 25%;
  top: 30%;
  background-color: white;
  box-sizing: border-box;
  border-radius: 12px;
`;

interface Props {
  open: boolean;
  id: string | null | undefined;
  closed: (event: MouseEvent<HTMLInputElement>) => void;
}

const CharacterModal: React.FC<Props> = ({ open, closed, id }) => {
  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <StyledModal open={open}>{id}</StyledModal>
    </>
  );
};

export default CharacterModal;
