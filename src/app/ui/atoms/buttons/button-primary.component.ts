import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'button-primary',
  standalone: false,
  template: `<button mat-flat-button class="custom-button" (click)="onClick.emit($event)">
              <i class="{{icon}}"></i> {{label}}
            </button>`,
  styles: ``
})
export class ButtonPrimaryComponent {

  @Input() icon: string = 'ri-save-line';
  @Input() label: string = 'Crear nuevo';

  @Output() onClick = new EventEmitter<any>();

}
