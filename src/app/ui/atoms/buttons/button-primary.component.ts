import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-primary',
  standalone: false,
  template: `<button mat-flat-button class="custom-button">
              <i-feather [name]="icon"></i-feather>
              {{label}}
            </button>`,
  styles: ``
})
export class ButtonPrimaryComponent {

  @Input() icon: string = 'user-plus';
  @Input() label: string = 'Crear nuevo';

}
