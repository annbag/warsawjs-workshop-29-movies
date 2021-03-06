import { Movie } from './../../interfaces/movie';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-list-item',
  templateUrl: './video-list-item.component.html',
  styleUrls: ['./video-list-item.component.css']
})
export class VideoListItemComponent implements OnInit {
  @Input() movie: Movie = null;

  constructor() {}

  ngOnInit() {}
}
