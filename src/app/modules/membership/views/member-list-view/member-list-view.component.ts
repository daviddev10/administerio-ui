import { Component, Input } from '@angular/core';

import { themeAlpine, themeBalham, themeQuartz, type ColDef } from "ag-grid-community";
import { IMember } from '../../../../core/domain/interfaces/membership/member.interface';

@Component({
  selector: 'app-member-list-view',
  standalone: false,
  templateUrl: './member-list-view.component.html',
  styleUrl: './member-list-view.component.scss'
})
export class MemberListViewComponent {

  @Input() memberList: IMember[] = [];

  public columns: ColDef<any>[] = [
    { field: "MemberName", flex: 1 },
    { field: "BirthDate" },
    { field: "Gender" },
    { field: "PhoneNumber" },
    { field: "CurrentAddress" },
  ];

}
