import { PageVideoProfileComponent } from './components/page-video-profile/page-video-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageVideoListComponent } from './components/page-video-list/page-video-list.component';

const routes: Routes = [
  {
    path: 'video-list',
    component: PageVideoListComponent
  },
  {
    path: 'video-profile',
    component: PageVideoProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogicRoutingModule { }
