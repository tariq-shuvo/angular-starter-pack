import { Component } from '@angular/core';

type UserInfo = {
  name: string;
  phone: string;
  dob: string;
}

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.css']
})

export class AgeCalculatorComponent {
  searchText = '';
  users:UserInfo[] = [
    {
      name: "user 1",
      phone: "0147897875",
      dob: "2001-06-17T11:08:00Z"
    },
    {
      name: "user 2",
      phone: "0147897875",
      dob: "2005-06-17T11:08:00Z"
    },
    {
      name: "user 3",
      phone: "0147897875",
      dob: "2002-06-17T11:08:00Z"
    },
    {
      name: "user 4",
      phone: "0147897875",
      dob: "2004-06-17T11:08:00Z"
    }
  ];

  addUser(){
    let min:number = 2000, max: number = 2022;
    let diff:number = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * diff);
    rand = rand + min;

    this.users = [...this.users, {
      name: `user ${this.users.length + 1}`,
      phone: "0147897875",
      dob: `${rand}-06-17T11:08:00Z`
    }];
  }
}
