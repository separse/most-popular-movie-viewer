import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesFacade } from 'src/app/state/movies.facade';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  selectedMovieId!: number;
  movies$: Observable<any> = this.facade.mostPopularMovies$;

  constructor(public facade: MoviesFacade) { }

  ngOnInit(): void {
    this.facade.loadMostPopularMovies();
    this.facade.selectedMovie$.subscribe((res) => {
      if(res) this.selectedMovieId = res.id;
    })
  }

  selectMovie(movie: any): void {
    this.facade.selectMovie(movie);
  }

}
