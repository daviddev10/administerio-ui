import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'input-text',
    standalone: false,
    template: `<mat-form-field>
                 <i-feather [name]="icon"></i-feather>
                 <mat-label>{{label}}</mat-label>
                 <input matInput [formControl]="InputControl" [placeholder]="placeholder">
               </mat-form-field>`,
    styles: ``
})
export class InputTextComponent {

  @Input() placeholder: string = ''
  @Input() InputControl = new FormControl();
  @Input({ required: true }) label: string = '';
  @Input({ required: true }) icon: string = ''
}
