import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LogicModule } from './logic/logic.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BackgroundColorDirective } from './shared/directives/background-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundColorDirective
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LogicModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
