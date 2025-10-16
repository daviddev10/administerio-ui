import { Component } from '@angular/core';
import { MemberForm } from '../shared/forms/member.form';
import { FormBuilder } from '@angular/forms';
import { ISaveMember } from '../../../core/domain/interfaces/membership/member.interface';
import { MembershipUseCase } from '../../../core/use-cases/membership/membership.use-case';
import { MembershipService } from '../../../infrastructure/services/membership.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-member-form',
  standalone: false,
  template: `<form-container 
              formTitle="Registrar miembro"
              mainButtonLabel="Guardar"
              mainButtonIcon="ri-save-line"
              (mainButtonClick)="onSaveMember()">
              <div class="content">
                  <app-member-form-view
                    [memberForm]="memberForm">
                  </app-member-form-view>
                  <pre>{{ memberForm.form.value | json }}</pre>
              </div>
            </form-container>`,
  styles: ``
})
export class MemberFormComponent {

  public memberForm: MemberForm;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private membershipService: MembershipService
  ) {
    this.memberForm = new MemberForm(this.fb);
  }

  public async onSaveMember(): Promise<void> {
    if (this.memberForm.form.valid) {
      try {
        const ucMembership = new MembershipUseCase(this.membershipService);
        const memberData: ISaveMember = ucMembership.getMemberSaveData(this.memberForm.form.getRawValue());
        // Guardar datos
        await ucMembership.onSaveMember(memberData);

        this.location.back();

      } catch (error) {
        console.log('error :>> ', error);
      }
    } else {
      this.memberForm.form.markAllAsTouched();
    }

  }

}
