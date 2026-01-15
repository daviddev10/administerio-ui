import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'input-password',
  standalone: false,
  template: ` <mat-form-field>
                <i-feather [name]="icon"></i-feather>
                <mat-label>{{label}}</mat-label>
                <input matInput [type]="hide ? 'password' : 'text'" id="password"
                    [formControl]="InputControl">
                <button type="button" mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Hide password'"
                    [attr.aria-pressed]="hide">
                    <span class="material-symbols-outlined">
                        {{hide ? 'visibility_off' : 'visibility'}}
                    </span>
                </button>
            </mat-form-field>`,
  styles: ``
})
export class InputPasswordComponent {

  @Input() icon: string = 'lock';
  @Input() placeholder: string = ''
  @Input() InputControl = new FormControl<string>(null);
  @Input() label: string = 'Ingresa tu contraseña';

  public hide: boolean = true;
}
