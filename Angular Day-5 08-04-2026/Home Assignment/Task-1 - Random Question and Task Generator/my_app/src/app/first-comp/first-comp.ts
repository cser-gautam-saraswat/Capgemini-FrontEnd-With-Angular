import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-comp',
  imports: [FormsModule],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
})
export class FirstComp {

 questions: string[] = [
    'Q1', 'Q2', 'Q3', 'Q4', 'Q5',
    'Q6', 'Q7', 'Q8', 'Q9', 'Q10'
  ];

  tasks: string[] = [
    'Task 1: JS',
    'Task 2: NG',
    'Task 3: Todo App',
    'Task 4: React',
    'Task 5: API'
  ];

  selectedData: string = '';


  getQuestion() {
    const index = Math.floor(Math.random() * 10);
    this.selectedData = this.questions[index];
  }

  getTask() {
    const index = Math.floor(Math.random() * 5);
    this.selectedData = this.tasks[index];
  }

}