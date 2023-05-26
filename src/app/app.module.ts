import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "contact-us",
    component: ContactComponent
  }
]

@NgModule({
  // load all the components here
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
  ],
  // load all the global imports 
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  // load all the project providers here
  providers: [],
  // initialize the starting component here
  bootstrap: [AppComponent]
})
export class AppModule { }
