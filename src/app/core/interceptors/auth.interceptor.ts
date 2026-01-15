import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  // Clonamos la petición (las peticiones son inmutables)
  let authRequest = req;

  // Obtener el token
  const authService = inject(AuthService);
  const token = authService.getToken();
  console.log('token :>> ', token);
  if (token) { // Si el token existe enviamos en las cabeceras
    authRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(authRequest);
};
