import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LogicModule } from './logic/logic.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BackgroundColorDirective } from './shared/directives/background-color.directive';
import { LogicRoutingModule } from './logic/logic-routing.module';
import { PageComponent } from './components/page-contact/page.component';
import { PageHomeComponent } from './components/page-home/page-home.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundColorDirective,
    PageComponent,
    PageHomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
