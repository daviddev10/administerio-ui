import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
// Interfaces
import { ISaveUser, IUser, IUserLogin } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.apiUrl}/users`);
  }

  getUserById(userId: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}/user/${userId}`);
  }

  postSaveUser(user: ISaveUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.apiUrl}/register`, user);
  }

  postLoginUser(login: IUserLogin): Observable<{ AccessToken: string }> {
    return this.http.post<{ AccessToken: string }>(`${this.apiUrl}/login`, login);
  }

  patchUpdateUser(user: ISaveUser, userId: number): Observable<IUser> {
    return this.http.patch<IUser>(`${this.apiUrl}/user/${userId}`, user);
  }

  deleteUserById(userId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/user/${userId}`);
  }
}
