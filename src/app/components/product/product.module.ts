import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { DetailsComponent } from './details/details.component';

const productRoute:Routes = [
  {
    path: "",
    component: ProductComponent
  },
  {
    path: "details",
    component: DetailsComponent
  }
];

@NgModule({
  declarations: [
    ProductComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoute),
  ]
})
export class ProductModule { }
