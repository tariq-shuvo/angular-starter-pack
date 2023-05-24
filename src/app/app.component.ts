import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // selector is define the selector of the componet it can be tag, class or id also
  templateUrl: './app.component.html', // templateUrl specify the html template for the component or template can carry html to visualize
  styleUrls: ['./app.component.css'], //  styleUrls can hold styles  files and styles can define css directly for this component
})
export class AppComponent {
  title = 'demo';
  firstName:string = 'angular';
  lastName:string = 'developer';
  address:string = 'your current address';

  languages:string[];

  isFullStackDeveloper:Boolean;

  constructor(){
    this.isFullStackDeveloper = true;
    this.languages = ["C", "Javascript", "Node js", "React", "Angular", "Vue js", "Mongodb", "Mysql"]
  }

  toggleCheckBox(){
    this.isFullStackDeveloper = !this.isFullStackDeveloper;
  }


}
