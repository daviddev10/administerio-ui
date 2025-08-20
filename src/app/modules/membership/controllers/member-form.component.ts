import { Component } from '@angular/core';

@Component({
  selector: 'app-member-form',
  standalone: false,
  template: `<form-container 
              formTitle="Registrar miembro"
              mainButtonLabel="Guardar"
              mainButtonIcon="ri-save-line"
              (mainButtonClick)="onSaveMember()">
              <div class="content">
                  <app-member-form-view></app-member-form-view>
              </div>
            </form-container>`,
  styles: ``
})
export class MemberFormComponent {

  public onSaveMember(): void {

  }

}
