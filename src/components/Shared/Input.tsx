import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding: 6px 10px;
  margin: 0 0 1rem 0;
  outline: none;
  border: none;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.tonysPink};
  font: inherit;
  cursor: text;
  box-shadow: ${({ theme }) => theme.shadow};

  @media ${({ theme: { mediaQueries } }) => mediaQueries.large} {
    width: 50%;
    height: auto;
  }
`;

interface InputProps {
  changed: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ changed, value, placeholder }: InputProps) => {
  return (
    <Cont>
      <StyledInput onChange={changed} value={value} placeholder={placeholder} />
    </Cont>
  );
};

export default Input;
