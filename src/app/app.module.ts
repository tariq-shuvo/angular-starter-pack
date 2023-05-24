import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  // load all the components here
  declarations: [
    AppComponent,
  ],
  // load all the global imports 
  imports: [
    BrowserModule,
    FormsModule
  ],
  // load all the project providers here
  providers: [],
  // initialize the starting component here
  bootstrap: [AppComponent]
})
export class AppModule { }
