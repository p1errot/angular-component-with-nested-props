import { Component, ContentChild, input } from '@angular/core';
import { ButtonPrefixDirective } from './button-prefix.directive';
import { ButtonSuffixDirective } from './button-suffix.directive';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @ContentChild(ButtonPrefixDirective) buttonPrefix?: ButtonPrefixDirective;
  @ContentChild(ButtonSuffixDirective) buttonSuffix?: ButtonSuffixDirective;

  icon = input('');
}
