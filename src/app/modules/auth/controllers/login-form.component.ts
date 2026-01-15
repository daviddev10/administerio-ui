import { Component, DestroyRef, inject, signal } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ILoginFields } from '../shared/interfaces/login.interface';
import { LoginForm } from '../shared/forms/login.form';
import { IUserLogin } from '../shared/interfaces/user.interface';
import { finalize, Subscription } from 'rxjs';
import { UserService } from '../shared/services/user.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login-form',
  standalone: false,
  template: `<app-login-form-view
              [isLogin]="true"
              [loginForm]="loginForm"
              [isLoading]="isLoading()"
              [pageFields]="loginPageFields"
              (onSendData)="onLoginUser($event)">
             </app-login-form-view>`,
  styles: ``
})
export class LoginFormComponent {

  public loginForm: LoginForm;
  public isLoading = signal<boolean>(false);
  public loginPageFields: ILoginFields = {
    titleForm: 'INICIAR SESIÓN',
    preLinkText: '¿No tienes una cuenta?',
    linkText: 'Regístrate aquí',
    linkUrl: '/auth/register',
    googleButtonText: 'Iniciar con Google',
    dividerText: 'O con tus credenciales',
    mainButtonText: 'INGRESAR'
  }

  private destroyRef = inject(DestroyRef);

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.loginForm = new LoginForm(this.fb);
  }

  public onLoginUser(loginData: IUserLogin): void {
    if (this.isLoading()) return; // Evitar múltiples clics
    this.isLoading.set(true);
    this.userService.postLoginUser(loginData)
      .pipe(
        takeUntilDestroyed(this.destroyRef), // Gestión automática de memoria
        finalize(() => this.isLoading.set(false)) // Se ejecuta tanto en éxito como en error
      )
      .subscribe({
        next: (res) => {
          this.onSuccessLogin(res.AccessToken);
        }
      });
  }

  private onSuccessLogin(token: string): void {
    // 1. Guardamos el token
    this.authService.saveToken(token);
    // 2. Redirigimos al inicio
    this.router.navigate(['/']);
  }

}
