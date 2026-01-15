import { Injectable } from '@angular/core';
import { toast } from 'ngx-sonner';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  // Ejemplos: https://tutkli.github.io/ngx-sonner/

  success(message: string, description?: string) {
    toast.success(message, {
      description: description,
    });
  }

  error(message: string, description?: string) {
    toast.error(message, {
      description: description,
    });
  }

  info(message: string, description?: string) {
    toast.info(message, {
      description: description,
    });
  }

  // Ejemplo de notificación de carga para promesas/observables
  promise(promise: Promise<any>, loadingMsg: string, successMsg: string, errorMsg: string) {
    toast.promise(promise, {
      loading: loadingMsg,
      success: successMsg,
      error: errorMsg,
    });
  }
}
