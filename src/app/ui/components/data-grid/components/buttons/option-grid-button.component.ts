import { Component } from '@angular/core';
import { ICellEditorRendererAngularComp } from 'ag-grid-angular';
import { ICellEditorRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-option-grid-button',
  standalone: false,
  template: `<button type="button" mat-button class="lh-1 p-0 w-auto h-auto btn-options" [matMenuTriggerFor]="cardHeaderMenu">
                <i class="ri-more-2-fill"></i>
             </button>
             <mat-menu #cardHeaderMenu="matMenu" class="card-header-menu" xPosition="before">
                <button mat-menu-item>
                    <i class="ri-edit-2-line"></i> Editar
                </button>
                <button mat-menu-item (click)="onDelete($event)">
                    <i class="ri-delete-bin-line"></i> Eliminar
                </button>
             </mat-menu>`,
  styles: `
  .btn-options {
      font-size: 16px;
    }`
})
export class OptionGridButtonComponent implements ICellEditorRendererAngularComp {
  public params: any;

  agInit(params: ICellEditorRendererParams<any, any, any>): void {
    this.params = params;
  }

  // refresh(params: any): boolean {
  //   return false;
  // }

  onClick(event: MouseEvent): void {
    event.stopPropagation();
    if (this.params.onClick) {
      this.params.onClick(this.params.data); // Envía los datos de la fila
    }
  }

  onDelete(event: MouseEvent): void {
    event.stopPropagation();
    if (this.params.onDeleteRow) {
      this.params.onDeleteRow(this.params.data); // Envía los datos de la fila
    }
  }

}
