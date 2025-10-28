import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'button-secondary',
  standalone: false,
  template: `<a (click)="onClick.emit()" class="default-btn" mat-button>
              <i class="{{icon}}"></i> {{label}}
             </a>`,
  styles: ``
})
export class ButtonSecondaryComponent {

  @Output() onClick = new EventEmitter<any>();
  
  @Input() label: string = 'Atrás';
  @Input() icon: string = 'ri-arrow-left-line';
}
