import { HttpClient, HttpParams } from '@angular/common/http';
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
    return this.http.get<IMember>(`${this.apiUrl}/info/${memberId}`);
  }

  postSaveMember(member: ISaveMember): Observable<IMember> {
    return this.http.post<IMember>(`${this.apiUrl}/create-member`, member);
  }
  patchUpdateMember(member: ISaveMember, memberId: number): Observable<IMember> {
    return this.http.patch<IMember>(`${this.apiUrl}/update/${memberId}`, member);
  }

  deleteMember(memberId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/remove/${memberId}`);
  }

  postUpdatePhoto(memberPhoto: File, memberId: number): Observable<IMember> {
    const formData = new FormData();
    formData.append('photo', memberPhoto);
    return this.http.post<IMember>(`${this.apiUrl}/update-photo/${memberId}`, formData);
  }
}
