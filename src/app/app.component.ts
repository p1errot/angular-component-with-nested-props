import { Component } from '@angular/core';
import { ButtonComponent } from './ui/button/button.component';
import { ButtonPrefixDirective } from './ui/button/button-prefix.directive';
import { ButtonSuffixDirective } from './ui/button/button-suffix.directive';
import { ICONS_LIST } from './app.constants';

@Component({
  selector: 'app-app',
  imports: [ButtonComponent, ButtonPrefixDirective, ButtonSuffixDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  iconsList = ICONS_LIST;
}
