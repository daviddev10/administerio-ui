import { Component, OnInit, ViewChild } from '@angular/core';
import { MemberForm } from '../shared/forms/member.form';
import { FormBuilder } from '@angular/forms';
import { ISaveMember } from '../../../core/domain/interfaces/membership/member.interface';
import { MembershipUseCase } from '../../../core/use-cases/membership/membership.use-case';
import { MembershipService } from '../../../infrastructure/services/membership.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MemberFormViewComponent } from '../views/member-form-view/member-form-view.component';

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
                    #memberFormView
                    [memberForm]="memberForm"
                    [memberPhoto]="memberPhoto"
                    (onSelectedMemberPhoto)="onSelectedMemberPhoto($event)">
                  </app-member-form-view>
                  <pre>{{ memberForm.form.value | json }}</pre>
              </div>
            </form-container>`,
  styles: ``
})
export class MemberFormComponent implements OnInit {

  @ViewChild('memberFormView') memberFormView: MemberFormViewComponent;

  public memberForm: MemberForm;
  public memberPhoto: string | File = null;

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
        const memberDataModel: ISaveMember = this.ucMembership.getMemberSaveData(this.memberForm.form.getRawValue());
        if (this.editId) {
          const updateMember = await this.ucMembership.onSaveMember(memberDataModel);

        } else {
          // Guardar datos
          const savedMember = await this.ucMembership.onSaveMember(memberDataModel);
          // Registrar la foto del miembro
          if (this.memberPhoto && typeof this.memberPhoto !== 'string') { // Exista la imagen y sea de tipo FILE
            await this.ucMembership.onSaveMemberPhoto(this.memberPhoto, savedMember.MemberId);
          }
        }
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
      // Actualizado de foto
      if (memberData.PhotoUrl) this.memberPhoto = memberData.PhotoUrl;
      this.memberFormView.reloadImageComponent();

    } catch (error) {
      console.log('error :>> ', error);
    }
  }

  public onSelectedMemberPhoto(memberPhoto: File): void {
    if (memberPhoto) {
      this.memberPhoto = memberPhoto;
    } else {
      this.memberPhoto = null;
    }
  }

}
