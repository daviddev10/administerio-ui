import { Component, OnInit } from '@angular/core';
import { MemberForm } from '../shared/forms/member.form';
import { FormBuilder } from '@angular/forms';
import { ISaveMember } from '../../../core/domain/interfaces/membership/member.interface';
import { MembershipUseCase } from '../../../core/use-cases/membership/membership.use-case';
import { MembershipService } from '../../../infrastructure/services/membership.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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
export class MemberFormComponent implements OnInit {

  public memberForm: MemberForm;
  private editId: number = null;
  private ucMembership: MembershipUseCase;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private membershipService: MembershipService
  ) {
    this.memberForm = new MemberForm(this.fb);
    this.editId = +this.activatedRoute.snapshot.params['id'];
    this.ucMembership = new MembershipUseCase(this.membershipService);
  }

  ngOnInit(): void {
    if (this.editId) this.getMemberData();
  }

  public async onSaveMember(): Promise<void> {
    if (this.memberForm.form.valid) {
      try {
        const memberData: ISaveMember = this.ucMembership.getMemberSaveData(this.memberForm.form.getRawValue());
        // Guardar datos
        await this.ucMembership.onSaveMember(memberData);
        this.location.back();
      } catch (error) {
        console.log('error :>> ', error);
      }
    } else {
      this.memberForm.form.markAllAsTouched();
    }
  }

  private async getMemberData(): Promise<void> {
    try {
      const memberData = await this.ucMembership.getMemberById(this.editId);
      this.memberForm.form.patchValue(memberData);
    } catch (error) {
      console.log('error :>> ', error);
    }
  }

}
