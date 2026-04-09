import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Switch } from './switch/switch';
import { AppNgSwitch } from './app-ng-switch/app-ng-switch';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNgSwitch, Switch],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my_app');
}
