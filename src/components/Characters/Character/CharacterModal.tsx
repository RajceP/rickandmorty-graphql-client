import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { useGetCharacterQuery } from '../../../generated/graphql';
import Backdrop from '../../Shared/Backdrop';
import InfoText from '../../Shared/InfoText';

const StyledModal = styled.div<{ open: boolean }>`
  display: ${(p) => (p.open ? 'flex' : 'none')};
  position: fixed;
  z-index: 500;
  width: 95%;
  min-height: 340px;
  padding: 16px;
  left: 2.5%;
  top: 15%;
  background-color: ${({ theme }) => theme.colors.cork};
  color: ${({ theme }) => theme.colors.atlantis};
  box-sizing: border-box;
  border-radius: 12px;
  flex-direction: column;
  animation: fadeIn 200ms;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media ${({ theme: { mediaQueries } }) => mediaQueries.medium} {
    flex-direction: row;
    width: 70%;
    left: 15%;
    top: 30%;
  }

  @media ${({ theme: { mediaQueries } }) => mediaQueries.large} {
    width: 40%;
    left: 30%;
    top: 30%;
  }
`;

const StyledImg = styled.img`
  object-fit: cover;
  border: 4px solid ${({ theme }) => theme.colors.tonysPink};
  border-radius: 12px;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 12px;
`;

const StyledName = styled.div`
  font-size: 32px;
`;

interface Props {
  open: boolean;
  id: string;
  closed: (event: MouseEvent<HTMLInputElement>) => void;
}

const CharacterModal: React.FC<Props> = ({ open, closed, id }) => {
  const { loading, error, data } = useGetCharacterQuery({
    variables: {
      id,
    },
  });

  const ch = data?.character;

  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <StyledModal open={open}>
        {loading && <InfoText text="Loading..." />}
        {error && <InfoText text="Error..." />}
        {!loading && !error && (
          <>
            {ch?.image && ch?.name && <StyledImg src={ch?.image} alt={ch?.name} />}
            <InfoColumn>
              <StyledName>{ch?.name}</StyledName>
              {ch?.status && <span>Status: {ch?.status}</span>}
              {ch?.species && <span>Species: {ch?.species}</span>}
              {ch?.type && <span>Type: {ch?.type}</span>}
              {ch?.gender && <span>Gender: {ch?.gender}</span>}
            </InfoColumn>
            {/* <pre>{JSON.stringify(data?.character, undefined, 2)}</pre> */}
          </>
        )}
      </StyledModal>
    </>
  );
};

export default CharacterModal;
