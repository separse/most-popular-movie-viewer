import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MoviesService {
  
  url :string = 'https://api.themoviedb.org/3/discover/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&sort_by=popularity.desc';

  constructor(private http: HttpClient) { }

  loadMostPopularMovies(): Observable<any> {
    return this.http.get<any>(this.url);
  }

}
