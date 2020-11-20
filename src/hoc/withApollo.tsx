import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql/',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            keyArgs: false,
            merge(existing, incoming) {
              //! This is ugly!
              let merged;
              if (!existing) {
                merged = incoming;
              } else {
                merged = JSON.parse(JSON.stringify(existing));
                merged.info.next = incoming?.info?.next;
                for (let i = 0; i < incoming.results.length; i += 1) {
                  merged.results.push(incoming.results[i]);
                }
              }

              return merged;
            },
          },
        },
      },
    },
  }),
});

const withApollo: React.FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default withApollo;
