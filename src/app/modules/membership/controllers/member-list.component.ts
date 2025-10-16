import { Component, OnInit } from '@angular/core';
import { MembershipService } from '../../../infrastructure/services/membership.service';
import { firstValueFrom } from 'rxjs';
import { IMember } from '../../../core/domain/interfaces/membership/member.interface';
import { MembershipUseCase } from '../../../core/use-cases/membership/membership.use-case';

@Component({
  selector: 'app-member-list',
  standalone: false,
  template: `<app-member-list-view
              [memberList]="memberList"
              (onDeleteMember)="onDeleteMember($event)">
             </app-member-list-view>`,
  styles: ``
})
export class MemberListComponent implements OnInit {

  public memberList: IMember[] = [];
  private ucMemberShip: MembershipUseCase;

  constructor(
    private membershipService: MembershipService
  ) {
    this.ucMemberShip = new MembershipUseCase(this.membershipService);
  }

  ngOnInit(): void {
    this.loadMemberList();
  }

  private async loadMemberList(): Promise<void> {
    try {
      this.memberList = await firstValueFrom(this.membershipService.getAllMembers());

    } catch (error) {
      console.log('error :>> ', error);
    }
  }

  public async onDeleteMember(memberId: number): Promise<void> {
    try {
      await this.ucMemberShip.onDeleteMember(memberId);
      // Recargar listado
      this.memberList = this.memberList.filter(m => m.MemberId != memberId);
    } catch (error) {
      console.log('error :>> ', error);
    }
  }

}
