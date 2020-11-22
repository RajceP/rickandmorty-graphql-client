import React from 'react';
import styled from 'styled-components';
import { Character } from '../../generated/graphql';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 4px solid ${({ theme }) => theme.colors.tonysPink};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.atlantis};
  box-shadow: ${({ theme }) => theme.shadow};
`;

const Img = styled.img`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  object-fit: cover;
`;

const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0.2rem;
  padding: 0.2rem;
`;

const CharactersCard: React.FC<Character> = ({ name, image }: Character) => {
  return (
    <Card>
      {image && name && <Img src={image} alt={name} />}
      <TextCont>{name}</TextCont>
    </Card>
  );
};

export default CharactersCard;
