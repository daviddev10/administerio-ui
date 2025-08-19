import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from './controllers/member-list.component';
import { MemberFormComponent } from './controllers/member-form.component';

const routes: Routes = [
  { path: '', component: MemberListComponent },
  { path: 'nuevo', component: MemberFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembershipRoutingModule { }
