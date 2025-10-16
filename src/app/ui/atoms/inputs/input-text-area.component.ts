import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'input-text-area',
  standalone: false,
  template: `<mat-form-field class="textarea">
                <i-feather [name]="icon"></i-feather>
                <mat-label>{{label}}</mat-label>
                <textarea [formControl]="InputControl" matInput [placeholder]="placeholder"></textarea>
             </mat-form-field>`,
  styles: ``
})
export class InputTextAreaComponent {

  @Input() placeholder: string = ''
  @Input() InputControl = new FormControl();
  @Input({ required: true }) label: string = '';
  @Input({ required: true }) icon: string = ''

}
