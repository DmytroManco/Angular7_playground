import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
