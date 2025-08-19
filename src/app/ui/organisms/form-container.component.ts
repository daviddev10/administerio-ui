import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'form-container',
  standalone: false,
  template: `<card-container>
              <div class="content-header">
                <app-toolbar 
                  [title]="formTitle"
                  [mainButtonLabel]="mainButtonLabel"
                  [mainButtonIcon]="mainButtonIcon"
                  (mainButtonClick)="mainButtonClick.emit($event)">
                </app-toolbar>
              </div>
              <!-- Contenido -->
              <ng-content></ng-content>
             </card-container>`,
  styles: ``
})
export class FormContainerComponent {
  @Input() mainButtonIcon: string = 'ri-save-line';
  @Input() mainButtonLabel: string = 'Crear nuevo';
  @Input({ required: true }) formTitle: string = 'Nuevo formulario';

  @Output() mainButtonClick = new EventEmitter<any>();
}
