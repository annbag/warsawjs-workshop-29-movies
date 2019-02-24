import { PageHomeComponent } from './components/page-home/page-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './components/page-contact/page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: PageHomeComponent
  },
  {
    path: 'contact',
    component: PageComponent
  },
  {
    path: 'videos',
    loadChildren: './logic/logic.module#LogicModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
