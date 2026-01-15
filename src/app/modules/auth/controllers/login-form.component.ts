import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ILoginFields } from '../shared/interfaces/login.interface';
import { LoginForm } from '../shared/forms/login.form';
import { ISaveUser, IUserLogin } from '../shared/interfaces/user.interface';
import { Subscription } from 'rxjs';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login-form',
  standalone: false,
  template: `<app-login-form-view
              [isLogin]="true"
              [loginForm]="loginForm"
              [isLoading]="isLoading"
              [pageFields]="loginPageFields"
              (onSendData)="onLoginUser($event)">
             </app-login-form-view>`,
  styles: ``
})
export class LoginFormComponent {

  public isLoading: boolean = false;

  public loginPageFields: ILoginFields = {
    titleForm: 'INICIAR SESIÓN',
    preLinkText: '¿No tienes una cuenta?',
    linkText: 'Regístrate aquí',
    linkUrl: '/auth/register',
    googleButtonText: 'Iniciar con Google',
    dividerText: 'O con tus credenciales',
    mainButtonText: 'INGRESAR'
  }

  public loginForm: LoginForm;

  private subscription$ = new Subscription();

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.loginForm = new LoginForm(this.fb);
  }

  public onLoginUser(loginData: IUserLogin): void {
    this.isLoading = true;
    const subs = this.userService.postLoginUser(loginData).subscribe((res) => {
      console.log('res :>> ', res);
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      console.log('error :>> ', error);
    });

    this.subscription$.add(subs);
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
