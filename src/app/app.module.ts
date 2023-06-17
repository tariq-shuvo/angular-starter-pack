import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CalculateAgePipe } from './pipes/calculate-age.pipe';
import { AgeCalculatorComponent } from './components/age-calculator/age-calculator.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PasswordStrengthCheckerDirective } from './directives/password-strength-checker.directive';

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
    CalculateAgePipe,
    AgeCalculatorComponent,
    FilterPipe,
    PasswordStrengthCheckerDirective,
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
