import React from 'react';
import styled from 'styled-components';
import { GetCharactersDocument, useGetCharactersQuery } from '../generated/graphql';

const Grid = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border-radius: 12px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2), 0 0 12px rgba(0, 0, 0, 0.2);
`;

const Img = styled.img`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  object-fit: cover;
`;

const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.2rem;
  padding: 0.2rem;
`;

const Characters: React.FC = () => {
  const { loading, error, data } = useGetCharactersQuery({ query: GetCharactersDocument });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  // return <pre>{JSON.stringify(data, undefined, 2)}</pre>;

  const characters = data?.characters?.results?.map((ch) => {
    return !ch ? null : (
      <Card key={ch?.id}>
        {ch?.image && ch?.name && <Img src={ch?.image} alt={ch?.name} />}
        <TextCont>
          <span>Name: {ch?.name}</span>
          <span>Status: {ch?.status}</span>
        </TextCont>
      </Card>
    );
  });

  return <Grid>{characters}</Grid>;
};

export default Characters;
