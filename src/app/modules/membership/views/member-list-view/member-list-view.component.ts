import { Component, EventEmitter, Input, Output } from '@angular/core';

import { themeAlpine, themeBalham, themeQuartz, type ColDef } from "ag-grid-community";
import { IMember } from '../../../../core/domain/interfaces/membership/member.interface';
import { FORMAT_DATE } from '../../../../shared/libs/dayjs/format-date.dayjs';

@Component({
  selector: 'app-member-list-view',
  standalone: false,
  templateUrl: './member-list-view.component.html',
  styleUrl: './member-list-view.component.scss'
})
export class MemberListViewComponent {

  @Input() memberList: IMember[] = [];
  @Output() onOpenMemberForm = new EventEmitter<any>();

  public columns: ColDef<any>[] = [
    {
      field: "MemberName",
      headerName: 'Nombre completo',
      flex: 1,
      filter: true,
      floatingFilter: true

    },
    {
      field: "BirthDate",
      headerName: 'F.Nacimiento',
      width: 150,
      filter: true,
      floatingFilter: true,
      cellRenderer: (params: any) => {
        if (params.value) return FORMAT_DATE(params.value, 'DD/MM/YYYY');
        return params.value;
      }
    },
    {
      field: "Gender",
      headerName: 'Genero',
      width: 100,
      cellRenderer: (params: any) => {
        console.log('params :>> ', params);
        return params.value == 1 ? 'Masculino' : 'Femenino';
      }
    },
    { field: "PhoneNumber", headerName: 'Teléfono', width: 100 },
    { field: "CurrentAddress", headerName: 'Dirección' },
  ];

}
