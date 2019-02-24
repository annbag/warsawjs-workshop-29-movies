import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './../movies.service';
import { LogicRoutingModule } from './logic-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageVideoListComponent } from './components/page-video-list/page-video-list.component';
import { PageVideoProfileComponent } from './components/page-video-profile/page-video-profile.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoListItemComponent } from './components/video-list-item/video-list-item.component';

@NgModule({
  declarations: [PageVideoListComponent, PageVideoProfileComponent, VideoListComponent, VideoListItemComponent],
  providers: [MoviesService],
  imports: [CommonModule, LogicRoutingModule, HttpClientModule],
  exports: []
})
export class LogicModule {}
