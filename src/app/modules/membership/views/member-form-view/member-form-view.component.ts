import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MemberForm } from '../../shared/forms/member.form';
import { IBaseInfo, IRadioValue } from '../../../../core/interfaces/common.interface';

@Component({
  selector: 'app-member-form-view',
  standalone: false,
  templateUrl: './member-form-view.component.html',
  styleUrl: './member-form-view.component.scss'
})
export class MemberFormViewComponent {

  @Input() memberForm!: MemberForm;
  @Input() memberPhoto: string | File = null;
  @Output() onSelectedMemberPhoto = new EventEmitter<File>();

  public showImageComponent: boolean = true;

  public genderOptions: IRadioValue[] = [
    { Value: 1, Name: 'Masculino' },
    { Value: 2, Name: 'Femenino' },
  ];

  public civilStatus: IBaseInfo[] = [
    { Id: 1, Name: 'Soltero(a)' },
    { Id: 2, Name: 'Casado(a)' },
    { Id: 3, Name: 'Viudo(a)' },
  ];

  public reloadImageComponent(): void {
    this.showImageComponent = false;
    setTimeout(() => {
      this.showImageComponent = true;
    });
  }
}
