import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CollapseComponent } from './shared/collapse/collapse.component';
import { MainPageComponent } from './features/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CollapseComponent,
    MainPageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
