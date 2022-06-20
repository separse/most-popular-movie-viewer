import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MoviesStateModule } from './state/movies-state.module';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieInfoComponent
  ],
  imports: [
    BrowserModule,
    MoviesStateModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
