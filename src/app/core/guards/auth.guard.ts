import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  // Si el usuario ya está autenticado, lo mandamos al home
  if (authService.isAuthenticated()) {
    router.navigate(['/']);
    return false; // No permite entrar al login
  }

  return true; // Permite entrar si NO está logueado
};
