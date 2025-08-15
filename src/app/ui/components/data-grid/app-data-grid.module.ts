import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDataGridComponent } from './components/main-data-grid/main-data-grid.component';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { OptionGridButtonComponent } from './components/buttons/option-grid-button.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    MainDataGridComponent,
    OptionGridButtonComponent
  ],
  imports: [
    CommonModule,
    AgGridAngular,
    AgGridModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    MainDataGridComponent
  ]
})
export class AppDataGridModule { }
