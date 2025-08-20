import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembershipRoutingModule } from './membership-routing.module';
import { MemberListComponent } from './controllers/member-list.component';
import { MemberListViewComponent } from './views/member-list-view/member-list-view.component';
import { UiModule } from "../../ui/ui.module";

import { AppDataGridModule } from '../../ui/components/data-grid/app-data-grid.module';
import { MemberFormComponent } from './controllers/member-form.component';
import { MemberFormViewComponent } from './views/member-form-view/member-form-view.component';
import { ImageFileComponent } from '../../ui/components/dropify/image-file.component';


@NgModule({
  declarations: [
    MemberListComponent,
    MemberListViewComponent,
    MemberFormComponent,
    MemberFormViewComponent
  ],
  imports: [
    UiModule,
    CommonModule,
    AppDataGridModule,
    ImageFileComponent,
    MembershipRoutingModule,
  ]
})
export class MembershipModule { }
