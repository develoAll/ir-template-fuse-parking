import { Route } from '@angular/router';
import { environment } from '@environments/environment';
import { RouterChildrenPositions } from '@shared/constants/general/route-path-constant';
import { initialDataResolver } from 'app/app.resolvers';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/presupuesto/crear-presupuesto'
    { path: '', pathMatch: 'full', redirectTo: 'estacionamiento' },

    // Redirect signed-in user to the '/presupuesto/crear-presupuesto'
    //
    // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'estacionamiento' },

    // Auth routes for guests
    {
        path: '',
        // canActivate: [NoAuthGuard],
        // canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.routes') },
            { path: 'session-verification', loadChildren: () => import('app/modules/auth/session-verification/session-verification.routes') },
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.routes') },
            { path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.routes') }
        ]
    },

    // Admin routes
    {
        path: '',
        //canActivate: [AuthGuard],
        //canActivateChild: [AuthGuard],
        component: LayoutComponent,
        /*resolve: {
            initialData: initialDataResolver
        },*/
        children: [
            // Ausencias
            { /*** __MODIFY__ (path) ***/
                path: environment.menu ? 'parking' : '', children: [
                    
                ]
            },
            // Proximamente
            { path: 'estacionamiento', loadChildren: () => import('app/modules/parking/parking.routes') },
        ]
    }
];
