import { createAction, props } from '@ngrx/store';

export class MoviesActions {
  /* load all popular movies */
  static loadMostPopularMovies = createAction('[movies] load most popular movies');
  static mostPopularMoviesLoaded = createAction('[movies] most popular movies loaded', props<{ data: any }>());
  /* select movie */
  static selectMovie = createAction('[movies] select movie', props<{ data: any }>());
  static movieSelected = createAction('[movies] movie selected', props<{ data: any }>());
  /* Error */
  static error = createAction('[movies] error occurred', props<{ reason: any }>());
  /* Reset */
  static reset = createAction('[movies] reset parameters');
}
