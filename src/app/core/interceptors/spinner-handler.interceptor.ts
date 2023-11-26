import { inject } from '@angular/core';
import { HttpRequest, HttpHandlerFn, HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Constants } from '@shared/constants/general/constants.constant';

export const SpinnerHandlerInterceptor: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn) => {

    const spintercept = Constants.SPINNER_CALL_SERVICES;

    const ngxSpinnerService = inject(NgxSpinnerService);

    ngxSpinnerService.show(spintercept);

    return next(request).pipe(
        finalize(()=>ngxSpinnerService.hide(spintercept))
    );
}