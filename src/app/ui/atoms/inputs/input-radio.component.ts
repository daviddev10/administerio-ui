import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IRadioValue } from '../../../core/interfaces/common.interface';

@Component({
  selector: 'app-input-radio',
  standalone: false,
  template: `<mat-radio-group [formControl]="InputControl">
                <mat-radio-button *ngFor="let op of options" [value]="op.Value">{{op.Name}}</mat-radio-button>
             </mat-radio-group>`,
  styles: ``
})
export class InputRadioComponent {

  @Input() InputControl = new FormControl()
  // @Input({ required: true }) label: string = '';
  @Input({ required: true }) options: IRadioValue[] = [];

}
