import { createSelector } from '@ngrx/store';
import { IMoviesPartialState, IMoviesState, MOVIES_FEATURE_KEY } from './movies.entity';

const moviesState = (state: any) => state[MOVIES_FEATURE_KEY];

export class MoviesSelectors {
  static mostPopularMovies = createSelector(moviesState, (state) => state.mostPopularMovies);
  static selectedMovie = createSelector(moviesState, (state) => state.selectedMovie);
  static error = createSelector(moviesState, (state) => state.error);
}
