import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Service } from '../../services/service';

@Component({
  selector: 'app-child-comp',
  imports: [],
  templateUrl: './child-comp.html',
  styleUrl: './child-comp.css',
})
export class ChildComp {
  @Input() namegiven:string = '';
  @Input() buttonName:string = '';

  @Output() data = new EventEmitter<string>();

  sendData() {
    this.data.emit('Hello Parent');
  }

  ser = inject(Service)
  d:string[]=[]
  addName(){
    this.ser.names.push("qwertyuiop")
    console.log(this.ser.names);
    
  }
}
