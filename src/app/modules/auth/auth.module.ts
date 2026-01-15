import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './controllers/login-form.component';
import { LoginFormViewComponent } from './views/login-form-view/login-form-view.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FeatherModule } from 'angular-feather';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { UiModule } from "../../ui/ui.module";


@NgModule({
  declarations: [
    LoginFormComponent,
    LoginFormViewComponent,
  ],
  imports: [
    CommonModule,
    FeatherModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    AuthRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    UiModule
]
})
export class AuthModule { }
