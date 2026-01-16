import { Component, DestroyRef, inject, signal } from '@angular/core';
import { LoginForm } from '../shared/forms/login.form';
import { ILoginFields } from '../shared/interfaces/login.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { ISaveUser, IUser, IUserLogin } from '../shared/interfaces/user.interface';
import { UserService } from '../shared/services/user.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-register-form',
  standalone: false,
  template: `<app-login-form-view
              [isLogin]="false"
              [loginForm]="loginForm"
              [isLoading]="isLoading()"
              [pageFields]="loginPageFields"
              (onSendData)="onRegisterUser($event)">
             </app-login-form-view>`,
  styles: ``
})
export class RegisterFormComponent {
  public loginForm: LoginForm;
  public isLoading = signal<boolean>(false);
  public loginPageFields: ILoginFields = {
    titleForm: 'NUEVO REGISTRO',
    preLinkText: '¿Ya tienes una cuenta?',
    linkText: 'Iniciar sesión',
    linkUrl: '/auth/login',
    googleButtonText: 'Registrarse con Google',
    dividerText: 'O ingresa tus credenciales',
    mainButtonText: 'REGISTRARSE'
  }

  private destroyRef = inject(DestroyRef);

  constructor(
    private router: Router,
    private fb: FormBuilder,
    // private authService: AuthService,
    private userService: UserService,
    private notify: NotificationService
  ) {
    this.loginForm = new LoginForm(this.fb);
    this.loginForm.controls.UserName.setValidators([Validators.required]);
  }

  public onRegisterUser(userData: ISaveUser): void {
    if (this.isLoading()) return; // Evitar múltiples clics
    this.isLoading.set(true);
    this.userService.postSaveUser(userData)
      .pipe(
        takeUntilDestroyed(this.destroyRef), // Gestión automática de memoria
        finalize(() => this.isLoading.set(false)) // Se ejecuta tanto en éxito como en error
      )
      .subscribe({
        next: (res) => {
          this.notify.success('¡Registro exitoso!', 'El usuario se ha registrado correctamente.');
          this.router.navigate(['auth/login'], { replaceUrl: true });
        }
      });
  }
}
