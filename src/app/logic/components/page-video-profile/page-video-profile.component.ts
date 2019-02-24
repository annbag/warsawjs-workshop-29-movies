import { Movie } from '../../interfaces/movie';
import { MoviesService } from './../../../movies.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-video-profile',
  templateUrl: './page-video-profile.component.html',
  styleUrls: ['./page-video-profile.component.css']
})
export class PageVideoProfileComponent implements OnInit {
  movie: Movie = null;

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit() {
    this.setupMovie();
  }

  async setupMovie() {
    const id = this.route.snapshot.params.id;
    this.movie = await this.movieService.fetchMovieById(id);
  }
}
