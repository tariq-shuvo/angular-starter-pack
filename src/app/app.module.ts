import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  // load all the components here
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule
  ],
  // load all the project providers here
  providers: [],
  // initialize the starting component here
  bootstrap: [AppComponent]
})
export class AppModule { }
