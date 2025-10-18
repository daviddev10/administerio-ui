import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColDef, themeQuartz } from 'ag-grid-community';
import { AG_GRID_LOCALE_ES } from '@ag-grid-community/locale';
import { OptionGridButtonComponent } from '../buttons/option-grid-button.component';

@Component({
  selector: 'app-main-data-grid',
  standalone: false,
  templateUrl: './main-data-grid.component.html',
  styleUrl: './main-data-grid.component.scss'
})
export class MainDataGridComponent implements OnInit {

  @Output() onEditRow = new EventEmitter<any>();
  @Output() onDeleteRow = new EventEmitter<any>();

  buttonOptions: ColDef = {
    headerName: '',
    width: 50,
    cellRenderer: OptionGridButtonComponent, // Referencia directa al componente
    cellRendererParams: {
      onEditRow: (data: any) => this.onEditRow.emit(data),
      onDeleteRow: (data: any) => this.onDeleteRow.emit(data)
    }
  }
  ngOnInit(): void {
    this.columnsData.push(this.buttonOptions);
  }

  @Input({ required: true }) dataSource: any[] = [];
  @Input({ required: true }) columnsData: ColDef<any>[] = [];

  // Custom AG Grid Theme
  public theme = themeQuartz
    .withParams({
      accentColor: "#3761EE",
      browserColorScheme: "light",
      fontFamily: {
        googleFont: "Inter"
      },
      fontSize: 13,
      headerFontFamily: {
        googleFont: "Inter"
      },
      headerFontSize: 13
    });

  // Textos personalizados en español
  public localeTex_ES = AG_GRID_LOCALE_ES
}
