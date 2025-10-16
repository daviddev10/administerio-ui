import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MAT_DATE_LOCALE, DateAdapter } from '@angular/material/core';

@Component({
  selector: 'input-date-picker',
  standalone: false,
  template: `<mat-form-field appearance="fill">
                <i-feather [name]="icon"></i-feather>
                <mat-label>{{label}}</mat-label>
                <input [formControl]="InputControl" matInput [matDatepicker]="picker2">
                <mat-datepicker-toggle matIconSuffix [for]="picker2"></mat-datepicker-toggle>
                <mat-datepicker #picker2></mat-datepicker>
             </mat-form-field>`,
  styles: ``
})
export class InputDatePickerComponent {

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('es-BO'); // o la que necesites
  }

  @Input() icon: string = 'calendar'
  @Input({ required: true }) label: string = '';
  @Input({ required: true }) InputControl = new FormControl();
}
