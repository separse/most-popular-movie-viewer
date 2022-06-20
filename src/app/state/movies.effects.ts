import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { MoviesActions } from './movies.action';
import { MoviesService } from './movies.service';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class MoviesEffects {
  constructor(
    private actions$: Actions,
    private service: MoviesService,
  ) {}
  /* load change datas */
  loadMostPopularMovies$ = createEffect(() => this.actions$.pipe(
    ofType(MoviesActions.loadMostPopularMovies),
    mergeMap(() =>
        this.service.loadMostPopularMovies().pipe(
          map((data) => {
            return MoviesActions.mostPopularMoviesLoaded({ data: data.results })
          }),
          catchError((error) => of(MoviesActions.error({ reason: error })))
        )
      ),
      catchError((error) => of(MoviesActions.error({ reason: error }))),
  ));
}
