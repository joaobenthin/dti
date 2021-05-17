import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Chip } from 'react-native-paper';
import { Modalize } from 'react-native-modalize';
import { View } from 'react-native';

import { AppBar } from '@components/AppBar';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { movieSlice, selectEntities } from '@store/modules/movie/movieSlice';

import { MoviesList } from './components/MoviesList';
import { MoviesModalFilter } from './components/MoviesModalFilter';

function MoviesScreen(): JSX.Element {
  const modalRef = useRef<Modalize>();

  const [searchText, setSearchText] = useState('');
  const [searching, setSearching] = useState(false);

  const handleOpenSearchBar = useCallback(() => {
    setSearching(true);
  }, []);

  const handleCloseSearchBar = useCallback(() => {
    setSearching(false);
    setSearchText('');
  }, []);

  const dispatch = useAppDispatch();

  const loadMovies = useCallback(() => {
    dispatch(movieSlice.actions.request({ searchText }));
  }, [dispatch, searchText]);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  const movies = useAppSelector(selectEntities);

  return (
    <>
      <AppBar
        searchText={searchText}
        setSearchText={setSearchText}
        searchBarOpen={searching}
        onOpenSearch={handleOpenSearchBar}
        onCloseSearch={handleCloseSearchBar}
      />
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 8,
          justifyContent: 'flex-end',
        }}
      >
        <Chip
          mode="outlined"
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 4,
          }}
          onPress={() => modalRef.current?.open()}
          icon="menu-down"
        >
          Ordenar
        </Chip>
      </View>
      <MoviesList movies={movies} refresh={loadMovies} />
      <MoviesModalFilter ref={modalRef} />
    </>
  );
}

export { MoviesScreen };
