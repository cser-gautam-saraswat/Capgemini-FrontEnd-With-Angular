import { Component } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  imports: [],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
})
export class FirstComp {
  view = 'list';

  users = [
    { name: 'Gautam', age: 22, city: 'Jaipur' },
    { name: 'Rahul', age: 25, city: 'Delhi' },
    { name: 'Amit', age: 24, city: 'Mumbai' }
  ];

  setType(type: string) {
    this.view = type;
  }
}
