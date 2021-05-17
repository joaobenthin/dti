import React from 'react';
import { FlatList } from 'react-native';
import { Divider } from 'react-native-paper';

import { selectLoading } from '@store/modules/movie/movieSlice';
import { useAppSelector } from '@store/hooks';
import { MovieDto } from '@store/modules/movie/types';

import { MoviesListItem } from './MoviesListItem';
import { MoviesListEmpty } from './MoviesListEmpty';

interface Props {
  movies: MovieDto[];
  refresh: () => void;
}

function MoviesList({ movies, refresh }: Props): JSX.Element {
  const loading = useAppSelector(selectLoading);

  return (
    <FlatList
      testID="movie-list"
      contentContainerStyle={{ flexGrow: 1 }}
      data={movies}
      renderItem={({ item }) => <MoviesListItem item={item} />}
      keyExtractor={item => `${item.imdbID}`}
      initialNumToRender={10}
      ItemSeparatorComponent={Divider}
      onRefresh={refresh}
      refreshing={loading}
      ListEmptyComponent={MoviesListEmpty}
    />
  );
}

export { MoviesList };
