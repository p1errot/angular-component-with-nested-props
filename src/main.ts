import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppComponent],
  template: `<app-app />`,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
