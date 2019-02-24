import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  async fetchMovies() {
    const response = await this.http.get('/assets/data.json').toPromise();
    return response;
  }
}
