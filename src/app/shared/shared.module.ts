import { NgModule } from '@angular/core';
import { CollapseComponent } from './collapse/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule
  ],
  declarations: [
    CollapseComponent
  ],
  exports: [
    CollapseComponent
  ]
})
export class SharedModule {}
