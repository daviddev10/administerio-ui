import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: false,
  template: `<div class="d-flex justify-content-between align-items-center">
              <h3>{{title}}</h3>
              <button-primary (onClick)="mainButtonClick.emit($event)"></button-primary>
             </div>`,
  styles: ``
})
export class ToolbarComponent {
  @Input({ required: true }) title: string = "toolbar";
  @Output() mainButtonClick: any = new EventEmitter<any>();

}
