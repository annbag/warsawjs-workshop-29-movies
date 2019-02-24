import { MoviesService } from './../../../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-video-list',
  templateUrl: './page-video-list.component.html',
  styleUrls: ['./page-video-list.component.css']
})
export class PageVideoListComponent implements OnInit {
  constructor(private video: MoviesService) {}

   getMovies() {
   const response =  this.video.fetchMovies();
   console.log(response);
   return response;
 }

  ngOnInit() {}
}
