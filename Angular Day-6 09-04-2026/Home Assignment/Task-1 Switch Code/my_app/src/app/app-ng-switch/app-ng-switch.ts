import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-app-ng-switch',
  imports: [NgSwitch, NgSwitchCase,NgSwitchDefault],
  templateUrl: './app-ng-switch.html',
  styleUrl: './app-ng-switch.css',
})
export class AppNgSwitch {
   role = 'Student';
}
