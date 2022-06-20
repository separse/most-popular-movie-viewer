import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MoviesFacade } from './movies.facade';
import { MoviesEffects } from './movies.effects';
import { MoviesService } from './movies.service';
import * as moviesReducer from './movies.reducer';
import { HttpClientModule } from '@angular/common/http';
import { MOVIES_FEATURE_KEY } from './movies.entity';

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(MOVIES_FEATURE_KEY, moviesReducer.reducer),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([MoviesEffects])
  ],
  providers: [MoviesService, MoviesFacade],
})
export class MoviesStateModule {}
