import { I18nPluralPipe, NgIf, DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { finalize, Subject, takeUntil, takeWhile, tap, timer } from 'rxjs';
import { environment } from '@environments/environment';

@Component({
    selector     : 'auth-sign-out',
    templateUrl  : './sign-out.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [NgIf, RouterLink, I18nPluralPipe],
})
export class AuthSignOutComponent implements OnInit, OnDestroy
{
    countdown: number = 2;
    countdownMapping: any = {
        '=1'   : '# segundo',
        'other': '# segundos',
    };
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(
        private _authService: AuthService,
        private _router: Router,
        @Inject(DOCUMENT) private document: Document
    ){}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Sign out
        this._authService.signOut();

        // Redirect after the countdown
        timer(1000, 1000)
            .pipe(
                finalize(() =>
                {
                    //this._router.navigate(['sign-in']);
                    this.redirectSignIdMeys();
                }),
                takeWhile(() => this.countdown > 0),
                takeUntil(this._unsubscribeAll),
                tap(() => this.countdown--),
            )
            .subscribe();
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    redirectSignIdMeys(){
        this.document.location.href = environment.URL_MEYS + '/sign-out';
    }
}
