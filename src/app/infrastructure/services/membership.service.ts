import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { IMember, ISaveMember } from '../../core/domain/interfaces/membership/member.interface';
import { MembershipRepository } from '../../core/repositories/membership.repository';

@Injectable({
  providedIn: 'root'
})
export class MembershipService implements MembershipRepository {

  private apiUrl = `${environment.apiUrl}/member`;

  constructor(private http: HttpClient) { }

  getAllMembers(): Observable<IMember[]> {
    return this.http.get<IMember[]>(`${this.apiUrl}/all-members`);
  }

  getMemberById(memberId: number): Observable<IMember> {
    throw new Error('Method not implemented.');
  }

  saveMember(member: ISaveMember): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-member`, member);
  }

  deleteMember(memberId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/remove/${memberId}`);
  }
}
