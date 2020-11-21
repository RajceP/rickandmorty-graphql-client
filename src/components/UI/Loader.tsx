import React from 'react';
import styled from 'styled-components';

const StyledLoader = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${({ theme }) => theme.colors.kobi};
`;

const Loader: React.FC = () => {
  return (
    <StyledLoader>
      <h1>Loading...</h1>
    </StyledLoader>
  );
};

export default Loader;
