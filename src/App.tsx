import { gql, useQuery } from '@apollo/client';
import React from 'react';

export const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      results {
        id
        name
        status
        image
      }
    }
  }
`;

const App: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return <pre>{JSON.stringify(data, undefined, 2)}</pre>;
};

export default App;
