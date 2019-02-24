import { MoviesService } from './../../../movies.service';
import { Component, OnInit } from '@angular/core';
import { Movies } from '../../interfaces/movies';

@Component({
  selector: 'app-page-video-list',
  templateUrl: './page-video-list.component.html',
  styleUrls: ['./page-video-list.component.css']
})
export class PageVideoListComponent implements OnInit {

  public movies: Movies = null;

  constructor(private video: MoviesService) {}

  async getMovies() {
    const response = await this.video.fetchMovies();
    console.log(response);
    return response;
  }

  async ngOnInit() {
    this.movies = await this.video.fetchMovies();
  }
}

