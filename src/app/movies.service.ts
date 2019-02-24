import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movies } from './logic/interfaces/movies';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  fetchMovies() {
   return <Promise<Movies>>this.http.get(environment.moviesUrl).toPromise();
  }

  async fetchMovieById(id) {
    const list = await this.fetchMovies();
    const movie = list.find((movie) => {
      return movie.id === id;
    });
    return movie;
  }
}
