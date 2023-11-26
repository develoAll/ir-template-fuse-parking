
import { EnvironmentProviders, Provider } from '@angular/core';
import { provideHttpClient,withInterceptors } from '@angular/common/http';
import { SpinnerHandlerInterceptor } from '@core/interceptors/spinner-handler.interceptor';
import { ErrorHandlerInterceptor } from '@core/interceptors/error-handler.interceptor';

export const provideInterceptors = (): Array<Provider | EnvironmentProviders> =>
{
    return [
        provideHttpClient(
            withInterceptors([SpinnerHandlerInterceptor,ErrorHandlerInterceptor]), //ErrorHandlerInterceptor
            //withLegacyInterceptors(),
        )
    ];
};
