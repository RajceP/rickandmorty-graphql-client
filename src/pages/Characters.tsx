import React from 'react';
import styled from 'styled-components';
import { useGetCharactersListQuery } from '../generated/graphql';

const Grid = styled.div`
  margin: auto;
  width: 80%;
  display: grid;
  gap: 0.4rem;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.atlantis};
  box-shadow: ${({ theme }) => theme.shadow};
`;

const Img = styled.img`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  object-fit: cover;
`;

const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0.2rem;
  padding: 0.2rem;
`;

const Characters: React.FC = () => {
  const { loading, error, data, fetchMore } = useGetCharactersListQuery({
    variables: {
      page: 1,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  // return <pre>{JSON.stringify(data, undefined, 2)}</pre>;

  const characters = data?.characters?.results?.map((ch) => {
    return !ch ? null : (
      <Card key={ch?.id}>
        {ch?.image && ch?.name && <Img src={ch?.image} alt={ch?.name} />}
        <TextCont>{ch?.name}</TextCont>
      </Card>
    );
  });

  return (
    <>
      <Grid>{characters}</Grid>
      <button
        type="button"
        onClick={() => {
          fetchMore({
            variables: {
              page: data?.characters?.info?.next,
            },
          });
        }}
      >
        MORE
      </button>
    </>
  );
};

export default Characters;
