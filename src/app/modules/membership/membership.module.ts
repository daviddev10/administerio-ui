import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembershipRoutingModule } from './membership-routing.module';
import { MemberListComponent } from './controllers/member-list.component';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MemberListViewComponent } from './views/member-list-view/member-list-view.component';
import { MatButtonModule } from '@angular/material/button';
import { UiModule } from "../../ui/ui.module";

import { AgGridAngular } from "ag-grid-angular";
import { AppDataGridModule } from '../../ui/components/data-grid/app-data-grid.module';


@NgModule({
  declarations: [
    MemberListComponent,
    MemberListViewComponent
  ],
  imports: [
    UiModule,
    CommonModule,
    AppDataGridModule,
    MembershipRoutingModule,
]
})
export class MembershipModule { }
