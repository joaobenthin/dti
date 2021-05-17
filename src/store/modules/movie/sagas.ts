import { all, call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import config from '@config/index';

import api from '@services/api';

import { movieSlice } from './movieSlice';
import { MovieDto, MovieRequest } from './types';

interface MovieResponseSaga {
  Search: MovieDto[];
}

function* movieRequestSaga(action: PayloadAction<MovieRequest>) {
  try {
    const { searchText } = action.payload;

    const response: AxiosResponse<MovieResponseSaga> = yield call(
      api.get,
      null,
      {
        params: {
          apikey: config.apiKey,
          s: searchText,
        },
      },
    );

    const {
      data: { Search: MovieResponse },
    } = response;

    yield put(movieSlice.actions.success(MovieResponse));
  } catch (e) {
    yield put(movieSlice.actions.failure);
  }
}

export default all([takeLatest(movieSlice.actions.request, movieRequestSaga)]);
