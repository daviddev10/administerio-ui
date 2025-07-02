import { Component, Input } from '@angular/core';
import { ColDef, LocaleTextFunc, themeQuartz } from 'ag-grid-community';
import { AG_GRID_LOCALE_ES } from '@ag-grid-community/locale';

@Component({
  selector: 'app-main-data-grid',
  standalone: false,
  templateUrl: './main-data-grid.component.html',
  styleUrl: './main-data-grid.component.scss'
})
export class MainDataGridComponent {

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
