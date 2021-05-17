import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../index';
import { MovieDto, MovieRequest, MovieState } from './types';

const initialState: MovieState = {
  entities: [],
  loading: false,
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    request: (state, action: PayloadAction<MovieRequest>) => {
      return {
        ...state,
        ...action,
        loading: true,
      };
    },
    success: (state, action: PayloadAction<MovieDto[]>) => {
      return {
        ...state,
        entities: action.payload,
        loading: false,
      };
    },
    failure: state => {
      return {
        ...state,
        loading: false,
      };
    },
    titleASC: state => {
      state.entities = state.entities.sort((movieA, movieB) =>
        movieA.Title.localeCompare(movieB.Title),
      );
    },
    titleDESC: state => {
      state.entities = state.entities
        .sort((movieA, movieB) => movieA.Title.localeCompare(movieB.Title))
        .reverse();
    },
    ratingASC: state => {
      state.entities = state.entities.sort((movieA, movieB) =>
        movieA.imdbRating.localeCompare(movieB.imdbRating),
      );
    },
    ratingDESC: state => {
      state.entities = state.entities
        .sort((movieA, movieB) =>
          movieA.imdbRating.localeCompare(movieB.imdbRating),
        )
        .reverse();
    },
  },
});

export const { request } = movieSlice.actions;

export const selectEntities = (state: RootState): MovieDto[] =>
  state.movie.entities;

export const selectLoading = (state: RootState): boolean => state.movie.loading;

export default movieSlice.reducer;
