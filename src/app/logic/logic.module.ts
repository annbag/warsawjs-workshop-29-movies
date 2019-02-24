import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageComponent } from './components/page/page.component';

@NgModule({
  declarations: [PageHomeComponent, PageComponent],
  imports: [CommonModule],
  exports: [PageHomeComponent, PageComponent]
})
export class LogicModule {}
