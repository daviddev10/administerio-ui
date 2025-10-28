import { Injectable } from '@angular/core';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private isOpenLoading: boolean = false;

  constructor() { }

  public startLoading(message: string = 'Cargando...', subMessage: string = 'Por favor espere un momento.') {
    if (this.isOpenLoading) return; // Evita multiples alertas
    this.isOpenLoading = true;
    // Mostrar alerta
    Swal.fire({
      title: message,
      text: subMessage,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      showCloseButton: true, // Solo para pruebas
      didOpen: () => {
        Swal.showLoading();
      },
      customClass: {
        popup: 'swal-loading-popup'
      }
    });
  }

  public stopLoading() {
    if (!this.isOpenLoading) return;
    Swal.close();
    this.isOpenLoading = false;
  }


  testAlert() {
    Swal.fire("SweetAlert2 is working!");

  }
}
