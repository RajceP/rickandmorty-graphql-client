import React from 'react';
import styled from 'styled-components';

const StyledInfoText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${({ theme }) => theme.colors.kobi};
`;

interface Props {
  text: string;
}

const InfoText: React.FC<Props> = ({ text }) => {
  return (
    <StyledInfoText>
      <h1>{text}</h1>
    </StyledInfoText>
  );
};

export default InfoText;
