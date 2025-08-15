import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembershipRoutingModule } from './membership-routing.module';
import { MemberListComponent } from './controllers/member-list.component';
import { MemberListViewComponent } from './views/member-list-view/member-list-view.component';
import { UiModule } from "../../ui/ui.module";

import { AppDataGridModule } from '../../ui/components/data-grid/app-data-grid.module';
import { MemberFormComponent } from './controllers/member-form.component';


@NgModule({
  declarations: [
    MemberListComponent,
    MemberListViewComponent,
    MemberFormComponent
  ],
  imports: [
    UiModule,
    CommonModule,
    AppDataGridModule,
    MembershipRoutingModule,
]
})
export class MembershipModule { }
