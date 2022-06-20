import { Component, OnInit } from '@angular/core';
import { MoviesFacade } from 'src/app/state/movies.facade';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {

  movie: any;

  constructor(public facade: MoviesFacade) { }

  ngOnInit(): void {
    this.facade.selectedMovie$.subscribe((res) => {
      console.log(res);
      
      if(res) this.movie = res;
    })
  }

}
