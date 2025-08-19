import { Component, OnInit } from '@angular/core';
import { MembershipService } from '../../../infrastructure/services/membership.service';
import { firstValueFrom } from 'rxjs';
import { IMember } from '../../../core/domain/interfaces/membership/member.interface';

@Component({
  selector: 'app-member-list',
  standalone: false,
  template: `<app-member-list-view
              [memberList]="memberList">
             </app-member-list-view>`,
  styles: ``
})
export class MemberListComponent implements OnInit {

  memberList: IMember[] = [];

  constructor(
    private membershipService: MembershipService
  ) { }

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

}
