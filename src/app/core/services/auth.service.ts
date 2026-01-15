import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token = signal<string | null>(localStorage.getItem('token'));
  // Signal computado para saber si está autenticado (booleano)
  public isAuthenticated = computed(() => !!this._token());

  constructor(private router: Router) {
    // Escuchamos cambios en otras pestañas
    window.addEventListener('storage', (event) => {
      if (event.key === 'token') {
        // Si el token fue eliminado (logout en otra pestaña)
        if (!event.newValue) {
          this._token.set(null);
          this.router.navigate(['/auth/login']);
        }
        // Si el token fue actualizado (login en otra pestaña)
        else {
          this._token.set(event.newValue);
        }
      }
    });
  }

  public getToken(): string | null {
    return this._token();
  }

  public saveToken(token: string): void {
    localStorage.setItem('token', token);
    this._token.set(token);
  }

  public logout(): void {
    localStorage.removeItem('token');
    this._token.set(null);
    // Redirigimos al login
    this.router.navigate(['/auth/login']);
  }
}
