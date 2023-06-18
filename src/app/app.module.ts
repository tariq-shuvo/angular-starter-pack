import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { ContactComponent } from './components/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CalculateAgePipe } from './pipes/calculate-age.pipe';
import { AgeCalculatorComponent } from './components/age-calculator/age-calculator.component';

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "age-calculator",
    component: AgeCalculatorComponent
  },
  {
    path: "products",
    // child modules load through routes 
    loadChildren:()=>import('./components/product/product.module').then(x=>x.ProductModule)
  },
  {
    path: "contact-us",
    // component: ContactComponent,
    // lazy loading feature in routes 
    loadComponent:()=>import('./components/contact/contact.component').then(x=>x.ContactComponent)
  }
]

@NgModule({
  // load all the components here
  declarations: [
    AppComponent,
    // ContactComponent,
    HomeComponent,
    CalculateAgePipe,
    AgeCalculatorComponent,
  ],
  // load all the global imports 
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  // load all the project providers here
  providers: [],
  // initialize the starting component here
  bootstrap: [AppComponent]
})
export class AppModule { }
