import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MemberForm } from '../../modules/membership/shared/forms/member.form';

@Component({
  selector: 'form-container',
  standalone: false,
  template: `<mat-card class="trinta-card mb-25 bg-white border-none d-block">
                <mat-card-header>
                    <app-toolbar 
                      [title]="formTitle"
                      [mainButtonLabel]="mainButtonLabel"
                      [mainButtonIcon]="mainButtonIcon"
                      (mainButtonClick)="mainButtonClick.emit($event)">
                    </app-toolbar>
                </mat-card-header>
                <mat-card-content>
                  <!-- Contenido -->
                  <ng-content></ng-content>
                </mat-card-content>
             </mat-card>`,
  styles: ``
})
export class FormContainerComponent {
  @Input() mainButtonIcon: string = 'ri-save-line';
  @Input() mainButtonLabel: string = 'Crear nuevo';
  @Input({ required: true }) formTitle: string = 'Nuevo formulario';

  @Output() mainButtonClick = new EventEmitter<any>();
}
