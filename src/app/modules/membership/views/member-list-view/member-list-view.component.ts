import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type ColDef } from "ag-grid-community";
import { IMember } from '../../../../core/domain/interfaces/membership/member.interface';
import { FORMAT_DATE } from '../../../../shared/libs/dayjs/format-date.dayjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-list-view',
  standalone: false,
  templateUrl: './member-list-view.component.html',
  styleUrl: './member-list-view.component.scss'
})
export class MemberListViewComponent {

  @Input() memberList: IMember[] = [];
  @Output() onDeleteMember = new EventEmitter<number>();

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
        return params.value == 1 ? 'Masculino' : 'Femenino';
      }
    },
    { field: "PhoneNumber", headerName: 'Teléfono', width: 100 },
    { field: "CurrentAddress", headerName: 'Dirección' },

  ];

  constructor(
    private router: Router
  ) { }

  public onConfirmDelete(member: IMember) {
    //Todo: Mensaje de confirmación
    this.onDeleteMember.emit(member.MemberId);
  }

  public goToMemberForm(memberId?: number): void {
    const memberFormUrl = memberId ? `miembros/editar/${memberId}` : `miembros/nuevo`;
    this.router.navigate([memberFormUrl]);
  }


}
