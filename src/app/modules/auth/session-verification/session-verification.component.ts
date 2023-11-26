import { I18nPluralPipe, NgIf, DOCUMENT } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '@core/auth/auth.service';
import { environment } from '@environments/environment';
import { ValidApplicationResponse } from '@shared/domain/dto/response/security/valid-application.interface';
import { catchError, of, Subject, tap } from 'rxjs';

@Component({
  selector: 'app-session-verification',
  templateUrl: './session-verification.component.html',
  styleUrls: ['./session-verification.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NgIf, RouterLink, I18nPluralPipe],
})
export class SessionVerificationComponent {

  countdown: number = 2;
  countdownMapping: any = {
    '=1': '# segundo',
    'other': '# segundos',
  };
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    // Sign out
    // this._authService.signOut();
    let _jwt = this._activatedRoute.snapshot.queryParamMap.get('jwt') || ''
    if (_jwt && _jwt != '') {
      this._authService.verifySession(_jwt).pipe(
        tap((resp:ValidApplicationResponse) => {
          this._authService.signInWithToken(resp.tokenSeguridad, resp.token)
          this._router.navigateByUrl('/signed-in-redirect');
        }),
        catchError((error) => {
          this.redirectSignIdMeys();
          return of(false);
        })
      ).subscribe();
    }else{
      this.redirectSignIdMeys();
    }
  }

  redirectSignIdMeys(){
    this._authService.signOut();
    this.document.location.href = environment.URL_MEYS + '/sign-out';
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
