import { Component, Input } from '@angular/core';
import { IBaseInfo } from '../../../core/interfaces/common.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-select',
  standalone: false,
  template: `<mat-form-field>
              <i-feather [name]="icon"></i-feather>
              <mat-label>{{label}}</mat-label>
              <mat-select [formControl]="InputControl">
                <mat-option *ngFor="let op of options" [value]="op.Id">{{op.Name}}</mat-option>
              </mat-select>
            </mat-form-field>`,
  styles: ``
})
export class InputSelectComponent {

  @Input() icon: string = 'list';
  @Input() options: IBaseInfo[] = []
  @Input() InputControl = new FormControl();
  @Input({ required: true }) label: string = '';

}
