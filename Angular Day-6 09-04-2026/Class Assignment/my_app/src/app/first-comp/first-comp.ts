import { Component, inject, OnInit } from '@angular/core';
import { ChildComp } from './child-comp/child-comp';
import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Service } from '../services/service';
import { Test } from '../services/test';


@Component({
  selector: 'app-first-comp',
  imports: [ChildComp, NgClass, NgStyle, NgFor],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
  providers: [Service, Test]
})
export class FirstComp implements OnInit{
  // d : string = '';
  // handleData(data:any){
  //   this.d = "data";
  //   console.log(data);
  // }

  applyClass: boolean = false;
  shouldApply() {
    this.applyClass = !this.applyClass
  }

  arr:number [] = [1,2,3,4,5,6,9,78,78];

  table = [
  { id: 1, name: 'Gautam' },
  { id: 2, name: 'Rahul' },
  { id: 3, name: 'Aman' }
];

d:Service
constructor(protected data : Service){
  this.d= data;
}

service = inject(Service);

test = inject(Test);
namesArr : string[] = this.test.namesArr;

addName(){
    this.test.namesArr.push("qwertyuiop")
    console.log(this.namesArr);
    
  }

ngOnInit(): void{
  this.namesArr = this.test.namesArr;
}
}
