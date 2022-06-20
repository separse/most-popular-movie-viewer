import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { MoviesActions } from './movies.action';
import { MoviesSelectors } from './movies.selector';
import { IMoviesState } from './movies.entity';

@Injectable()
export class MoviesFacade {
  mostPopularMovies$ = this.store.pipe(select(MoviesSelectors.mostPopularMovies));
  selectedMovie$ = this.store.pipe(select(MoviesSelectors.selectedMovie));
  error$ = this.store.pipe(select(MoviesSelectors.error));
  
  constructor(private store: Store<IMoviesState>) { }

  loadMostPopularMovies(): void {
    this.store.dispatch(MoviesActions.loadMostPopularMovies());
  }

  selectMovie(movie: any): void {
    this.store.dispatch(MoviesActions.selectMovie({ data: movie }));
  }

  reset() {
    this.store.dispatch(MoviesActions.reset());
  }
}
