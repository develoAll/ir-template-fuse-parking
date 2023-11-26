import { inject } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpRequest, HttpHandlerFn, HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorStruct } from '@shared/types/response.struct.type';
import { NgxSpinnerService } from 'ngx-spinner';
import { Constants } from '@shared/constants/general/constants.constant';

export const ErrorHandlerInterceptor: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn) => {

  const sploading = Constants.SPINNER_LOADING_DATA;
  const ngxSpinnerService = inject(NgxSpinnerService);

  const _toastrService = inject(ToastrService);

  return next(request).pipe(
    catchError((error: HttpErrorStruct) => {
      if (error instanceof HttpErrorResponse) {
        if (error.error.status === 500) {
          ngxSpinnerService.hide(sploading);
          showErrorMessage("Ha sucedido un error fatal. Por favor, comuníquese con el administrador del sistema.", "Error de servicio");
          return EMPTY;
        } else if (error.error.status === 400) {
          showErrorMessage(error.error.comment, "Error de validación");
          return EMPTY;
        } else {
          showErrorMessage("Intente nuevamente o comuníquese con el administrador del sistema.", "Error inesperado");
          return EMPTY;
        }
      }
    })
  );

  function showErrorMessage(message: string, title: string) {
    _toastrService.error(message, title, {
      closeButton: true,
      timeOut: 6000,
      progressBar: true,
      toastClass: 'toast-custom',
      progressAnimation: 'decreasing'
    });
  }
}