import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDataGridComponent } from './components/main-data-grid/main-data-grid.component';
import { AgGridAngular } from 'ag-grid-angular';



@NgModule({
  declarations: [
    MainDataGridComponent
  ],
  imports: [
    CommonModule,
    AgGridAngular
  ],
  exports: [
    MainDataGridComponent
  ]
})
export class AppDataGridModule { }
