import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  async fetchMovies() {
    const response = await this.http.get(environment.movieUrl).toPromise();
    return response;
  }
}
