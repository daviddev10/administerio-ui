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
      if (error.error instanceof ErrorEvent) { // Error del lado del cliente (ej. problemas de red)
        errorMessage = `Error: ${error.error.message}`;
      } else { // Error del lado del servidor (API)
        console.log('error :>> ', error);
        const reqError = error.error;
        if (error.status === 400) {
          if (Array.isArray(reqError.message)) {
            reqError.message.forEach((message: string) => {
              notify.error('Error', message);
            });
          }
        } else {
          notify.error('Error', reqError.message);
        }
        // Ejemplo de manejo específico (Principio de Responsabilidad Única)
        if (error.status === 401) {
          // Lógica para redirigir al login o refrescar token
        }
      }
      return throwError(() => new Error(errorMessage));
    })
  );;
};
