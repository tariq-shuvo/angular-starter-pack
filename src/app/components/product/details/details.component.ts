import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(private router:Router){}
  back(){
    this.router.navigate(["products"]).then((r)=>console.log("navigate")); // relative + absolute both
    // this.router.navigateByUrl("products"); // absolutepath only
  }
}
