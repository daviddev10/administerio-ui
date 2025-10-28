import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: false,
  template: `<div class="d-flex justify-content-between align-items-center">
              <h3>{{title}}</h3>
              <div class="buttons-content">
                <!-- Primary -->
                <button-primary [label]="mainButtonLabel" [icon]="mainButtonIcon" 
                  (onClick)="mainButtonClick.emit($event)">
                </button-primary>
                <!-- Secondary -->
                <button-secondary *ngIf="showCancelButton" [icon]="secondButtonIcon" [label]="secondButtonLabel" (onClick)="location.back()"></button-secondary>
              </div>
             </div>`,
  styles: `
  .buttons-content{
    display: flex;
    gap: 10px;
  }
  `
})
export class ToolbarComponent {
  @Input() mainButtonIcon: string = "save";
  @Input() showCancelButton: boolean = true;
  @Input() mainButtonLabel: string = "Crear nuevo";
  @Input() secondButtonLabel: string = "Atrás";
  @Input() secondButtonIcon: string = "ri-arrow-left-line";
  @Input({ required: true }) title: string = "toolbar";
  @Output() mainButtonClick: any = new EventEmitter<any>();

  constructor(
    public location: Location
  ) {

  }

}
