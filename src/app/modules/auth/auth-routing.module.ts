import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './controllers/login-form.component';
import { authGuard } from '../../core/guards/auth.guard';
import { RegisterFormComponent } from './controllers/register-form.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    children: [
      { path: 'login', component: LoginFormComponent },
      { path: 'registro', component: RegisterFormComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
