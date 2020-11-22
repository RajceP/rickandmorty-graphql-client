import React, { ChangeEvent, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';
import CharactersCard from '../components/Characters/CharactersCard';
import Loader from '../components/Shared/InfoText';
import Input from '../components/Shared/Input';
import { useGetCharactersListQuery } from '../generated/graphql';
import useDebounce from '../hooks/useDebounce';

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
`;

const Characters: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const debouncedSearchInput = useDebounce(searchInput, 500);
  const { loading, error, data, fetchMore, refetch } = useGetCharactersListQuery({
    variables: {
      page: 1,
    },
  });

  useEffect(() => {
    if (debouncedSearchInput || debouncedSearchInput === '') {
      fetchSearched();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchInput]);

  const fetchSearched = () => {
    if (searchInput === '') {
      refetch({ page: 1, filter: null });
    } else if (searchInput.length < 3) {
      return null;
    } else {
      refetch({
        filter: { name: searchInput },
      });
    }
  };

  const hasMore = () => {
    if (data?.characters?.info?.next && data?.characters?.info?.pages) {
      return data?.characters?.info?.next < data?.characters?.info?.pages;
    }

    return false;
  };

  const searchInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const characters = data?.characters?.results?.map((ch) => {
    return !ch ? null : <CharactersCard {...ch} key={ch?.id} />;
  });

  return (
    <>
      <Input
        changed={(event) => searchInputChangeHandler(event)}
        value={searchInput}
        placeholder="Search..."
      />
      {loading && <Loader text="Loading..." />}
      {error && <Loader text="Error..." />}
      {!loading && !error && (
        <InfiniteScroll
          pageStart={0}
          loadMore={() => {
            fetchMore({
              variables: {
                page: data?.characters?.info?.next,
                filter: { name: searchInput },
              },
            });
          }}
          hasMore={hasMore()}
          loader={<Loader text="Loading..." />}
          initialLoad={false}
          useWindow
        >
          <Grid>{characters}</Grid>
        </InfiniteScroll>
      )}
    </>
  );
};

export default Characters;
