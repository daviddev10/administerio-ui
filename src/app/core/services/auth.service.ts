import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token = signal<string | null>(localStorage.getItem('token'));

  public getToken(): string | null {
    return this._token();
  }
}
