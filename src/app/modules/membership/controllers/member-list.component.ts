import { Component, OnInit } from '@angular/core';
import { MembershipService } from '../../../infrastructure/services/membership.service';
import { firstValueFrom, Subscription } from 'rxjs';

@Component({
  selector: 'app-member-list',
  standalone: false,
  template: `<app-member-list-view></app-member-list-view>`,
  styles: ``
})
export class MemberListComponent implements OnInit {

  constructor(
    private membershipService: MembershipService
  ) { }

  ngOnInit(): void {
    this.loadMemberList();
  }

  private async loadMemberList(): Promise<void> {
    try {
      const allMembers = await firstValueFrom(this.membershipService.getAllMembers());
      console.log('allMembers :>> ', allMembers);

    } catch (error) {
      console.log('error :>> ', error);
    }
  }



}
