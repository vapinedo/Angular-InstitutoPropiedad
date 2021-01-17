import { Injectable } from '@angular/core';

import Swal, { SweetAlertResult } from 'sweetalert2';

@Injectable()
export class DialogService {

  constructor() { }

  simple(message: string): Promise<SweetAlertResult<any>> {
    return Swal.fire(message);
  }

  

  confirm(message: any): Promise<SweetAlertResult<any>> {
    return Swal.fire({ 
      icon: 'warning',
      title: '¿Estás seguro?',
      text: `Estás a punto de ${ message }`,
      showCancelButton: true,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
      showConfirmButton: true
    });
  }

  error(message: string): Promise<SweetAlertResult<any>> {
    return Swal.fire({ 
      icon: 'error',
      title: 'Error',
      text: message
    });   
  }

  success(message: string): Promise<SweetAlertResult<any>> {
    return Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1700
    });
  }

}