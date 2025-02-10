import { Component } from '@angular/core';
import { ButtonComponent } from './ui/button/button.component';

@Component({
  selector: 'app-app',
  imports: [ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
