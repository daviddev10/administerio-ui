import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'form-container',
  standalone: false,
  template: `<card-container>
              <div class="content-header">
                <app-toolbar [title]="formTitle" (mainButtonClick)="mainButtonClick.emit($event)"></app-toolbar>
              </div>
              <!-- Contenido -->
              <ng-content></ng-content>
             </card-container>`,
  styles: ``
})
export class FormContainerComponent {
  @Input({ required: true }) formTitle: string = 'Nuevo formulario';

  @Output() mainButtonClick = new EventEmitter<any>();
}
