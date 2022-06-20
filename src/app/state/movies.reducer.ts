import { MoviesActions } from './movies.action';
import { Action, createReducer, on } from '@ngrx/store';
import { IMoviesState, initialState } from './movies.entity';

const moviesReducer = createReducer(
  initialState,
  /* load most popular movies */
  on(MoviesActions.loadMostPopularMovies, (state) => ({ ...state, mostPopularMovies: null , error:null })),
  on(MoviesActions.mostPopularMoviesLoaded, (state, { data }) => ({ ...state, mostPopularMovies: data , selectedMovie: data[0], error: null })),
  /* most popular movies loaded */
  on(MoviesActions.selectMovie, (state, { data }) => ({ ...state, selectedMovie: data , error: null })),
  on(MoviesActions.movieSelected, (state, { data }) => ({ ...state, selectedMovie: data , error: null })),
  /* Error */
  on(MoviesActions.error, (state, { reason }) => ({ ...state, error: reason, loaded: true })),
  /* Reset */
  on(MoviesActions.reset, (state) => ({
    ...state,
    mostPopularMovies: null,
    selectedMovie: null,
    error: null,
  }))
);

export const reducer = (state: IMoviesState, action: Action) => {
  return moviesReducer(state, action);
};
