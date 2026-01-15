import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const privateGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Si NO está autenticado, lo mandamos al login
  if (!authService.isAuthenticated()) {
    console.warn('Acceso denegado: Usuario no autenticado');
    router.navigate(['/auth/login']);
    return false;
  }

  return true; // Permite el paso a la ruta privada
};
