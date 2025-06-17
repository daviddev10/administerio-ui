import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MemberListComponent } from './controllers/member-list.component';
import { MemberListViewComponent } from './views/member-list-view/member-list-view.component';


@NgModule({
  declarations: [
    MemberListComponent,
    MemberListViewComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule
  ]
})
export class MembersModule { }
