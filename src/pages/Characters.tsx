import React from 'react';
import { GetCharactersDocument, useGetCharactersQuery } from '../generated/graphql';

const Characters: React.FC = () => {
  const { loading, error, data } = useGetCharactersQuery({ query: GetCharactersDocument });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return <pre>{JSON.stringify(data, undefined, 2)}</pre>;
};

export default Characters;
