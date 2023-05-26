import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddEmployee, FetchEmployee } from 'src/app/model/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  isLoading:boolean = false;
  employees:any = [];
  employeeInfo:AddEmployee = {
    name: '',
    age: 0,
    salary: 0
  };
  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.isLoading = true;
    this.http.get<FetchEmployee>("https://dummy.restapiexample.com/api/v1/employees").subscribe(res=>{
     this.employees = res.data;
     this.isLoading = false;
    })
  }

  addEmployeeInfo(employeeInfoData:NgForm){
    this.http.post("https://dummy.restapiexample.com/api/v1/create", this.employeeInfo).subscribe(res=>{
      console.log(res)
    })
  }
}
