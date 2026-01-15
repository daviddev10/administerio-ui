import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'input-text',
  standalone: false,
  template: `<mat-form-field>
                <i-feather [name]="icon"></i-feather>
                <mat-label>{{label}}</mat-label>
                <input #inputElement matInput [formControl]="InputControl" [placeholder]="placeholder">
             </mat-form-field>`,
  styles: ``
})
export class InputTextComponent {

  @ViewChild('inputElement') inputElement!: ElementRef<HTMLInputElement>;

  @Input() placeholder: string = ''
  @Input() InputControl = new FormControl();
  @Input({ required: true }) icon: string = ''
  @Input({ required: true }) label: string = '';

  @Input() set setFocus(value: boolean) {
    if (value) {
      setTimeout(() => {
        this.inputElement?.nativeElement.focus();
      });
    }
  }
}
