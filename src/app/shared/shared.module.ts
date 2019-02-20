import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CollapseComponent } from './collapse/';
import { ClickOutsideDirective } from './directives/click-outside';

@NgModule({
  imports: [
    BrowserAnimationsModule
  ],
  declarations: [
    CollapseComponent,
    ClickOutsideDirective,
  ],
  exports: [
    CollapseComponent,
    ClickOutsideDirective
  ]
})
export class SharedModule {}
