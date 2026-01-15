import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './controllers/login-form.component';
import { authGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'login', component: LoginFormComponent, canActivate: [authGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
