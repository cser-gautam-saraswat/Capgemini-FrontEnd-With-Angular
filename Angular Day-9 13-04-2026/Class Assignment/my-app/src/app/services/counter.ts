  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root',
  })
  export class Counter {
    count : number =0
    incrementCount(){
      this.count++;
    }
    decrementCount(){
      this.count--;
    }
    resetCount(){
      this.count = 0;
    }
  }
