import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { NotificationService } from '../services/notification.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const notify = inject(NotificationService);

  return next(req).pipe(
    retry({ count: 1, delay: 1000 }), // Reintentar la solicitud antes de pasar al error
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'Ha ocurrido un error inesperado!';
      if (error.error instanceof ErrorEvent) {
        // Error del lado del cliente (ej. problemas de red)
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // Error del lado del servidor (API)
        console.log('error :>> ', error);
        const reqError = error.error;
        errorMessage = `Código: ${error.status}, Mensaje: ${error.error.message}`;

        // Ejemplo de manejo específico (Principio de Responsabilidad Única)
        if (error.status === 401) {
          // Lógica para redirigir al login o refrescar token
        }
      }

      console.warn(errorMessage);
      notify.success('mensaje','Description')
      return throwError(() => new Error(errorMessage));
    })
  );;
};
