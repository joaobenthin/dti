import { combineReducers } from 'redux';
import { movieSlice } from './movie/movieSlice';

export default combineReducers({
  movie: movieSlice.reducer,
});
