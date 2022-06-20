import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
// state model
export interface IMoviesState extends EntityState<any> {
  mostPopularMovies: any,
  selectedMovie: any,
  error?: any;
}
export const MOVIES_FEATURE_KEY ='movies';
/* Partial State */
export interface IMoviesPartialState { [MOVIES_FEATURE_KEY]: IMoviesState }
/* Adapter */
export const moviesAdapter: EntityAdapter<any> =createEntityAdapter<any>();
/* Initial State Data */
export const initialState: IMoviesState = moviesAdapter.getInitialState(
  {
    mostPopularMovies: null,
    selectedMovie: null,
    error: null,
  } as IMoviesState
);
