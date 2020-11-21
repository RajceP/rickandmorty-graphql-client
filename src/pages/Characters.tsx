import React, { ChangeEvent, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';
import Input from '../components/UI/Input';
import Loader from '../components/UI/Loader';
import { useGetCharactersListQuery } from '../generated/graphql';
import useDebounce from '../hooks/useDebounce';

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
`;

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
    return !ch ? null : (
      <Card key={ch?.id}>
        {ch?.image && ch?.name && <Img src={ch?.image} alt={ch?.name} />}
        <TextCont>{ch?.name}</TextCont>
      </Card>
    );
  });

  return (
    <>
      <Input changed={(event) => searchInputChangeHandler(event)} value={searchInput} />
      {loading && <Loader key="fetch" />}
      {error && <p>Error! {error.message}</p>}
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
          loader={<Loader key="fetchMore" />}
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
