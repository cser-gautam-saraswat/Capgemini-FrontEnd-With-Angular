import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-comp',
  imports: [FormsModule],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
})
export class FirstComp {
  name:string = "Gautam"
  style:string = `color:red;`
  isHidden: boolean = false
  ipVal :string = ''

  click(){
    this.isHidden = !this.isHidden
  }
  // inputValChange(str : any){
  //   console.log(str);
  //   this.ipVal = str;
  //   console.log(this.ipVal)
  // }
}
