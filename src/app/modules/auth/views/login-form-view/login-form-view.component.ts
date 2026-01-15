import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ILoginFields } from '../../shared/interfaces/login.interface';
import { LoginForm } from '../../shared/forms/login.form';
import { ISaveUser, IUserLogin } from '../../shared/interfaces/user.interface';

@Component({
  selector: 'app-login-form-view',
  standalone: false,
  templateUrl: './login-form-view.component.html',
  styleUrl: './login-form-view.component.scss'
})
export class LoginFormViewComponent {

  @Input() loginForm: LoginForm;
  @Input() isLogin: boolean = false;
  @Input() isLoading: boolean = false;
  @Input({ required: true }) pageFields: ILoginFields;

  @Output() onSendData = new EventEmitter<IUserLogin | ISaveUser>();

  public onSubmit(): void {
    if (this.loginForm.form.valid) {
      if (this.isLogin) {
        this.onSendData.emit({
          Email: this.loginForm.controls.Email.value,
          Password: this.loginForm.controls.Password.value
        });
      } else {
        this.onSendData.emit(this.loginForm.form.getRawValue());
      }
    } else {
      this.loginForm.form.markAllAsTouched();
    }
  }
}
