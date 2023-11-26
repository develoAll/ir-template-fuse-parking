import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenResponse } from '@shared/domain/dto/response/security/token-response.interface';
import { DataUserResponseDto, ValidApplicationResponse } from '@shared/domain/dto/response/security/valid-application.interface';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { UserService } from 'app/core/user/user.service';
import { environment } from 'environments/environment';
import { catchError, EMPTY, Observable, of, switchMap, throwError } from 'rxjs';
import { SessionStorageService } from 'angular-web-storage';
import { UserAuth } from '@shared/domain/models/user-auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private _authenticated: boolean = false;
    urlWebApi: string;
    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        private _userService: UserService,
        private _sessionStorage: SessionStorageService) {
        this.urlWebApi = `${environment.serverUriApiSecurity}/auth`;
    }

    getDataUser(): UserAuth {
        let tokenUser = this.accessUserDetailsToken;
        let userData: DataUserResponseDto = AuthUtils._decodeToken(tokenUser);
        /// console.log("***********mostrar menu******",userData.data)
        return userData.data;
    }

    getFullNameUser(): string {
        let tokenUser = this.accessUserDetailsToken;
        let userData: DataUserResponseDto = AuthUtils._decodeToken(tokenUser);
        let secondaryName = userData.data.person.secondaryName == null ? '' : ` ${userData.data.person.secondaryName}`
        let motherLastName = userData.data.person.motherLastName == null ? '' : ` ${userData.data.person.motherLastName}`

        return `${userData.data.person.firstName}${secondaryName}, ${userData.data.person.fatherLastName} ${motherLastName}`;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for access token && user details token
     */
    set accessToken(token: string) {
        this._sessionStorage.set(environment.VAR_AUTH, token);
    }

    get accessToken(): string {
        return this._sessionStorage.get(environment.VAR_AUTH) ?? '';
    }

    set accessUserDetailsToken(token: string) {
        this._sessionStorage.set(environment.VAR_USER, token);
    }

    get accessUserDetailsToken(): string {
        return this._sessionStorage.get(environment.VAR_USER) ?? '';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    verifySession(token: string): Observable<ValidApplicationResponse> {
        if (AuthUtils.isTokenExpired(token)) {
            return EMPTY;
        }

        let _token = AuthUtils._decodeToken(token);
        let _user: TokenResponse = _token;

        console.log(_token)
        console.log(AuthUtils.isTokenExpired(token))

        let _request: any = {
            "username": _user.codUsuario,
            "codApplication": environment.VAR_COD_APP
        }

        return this._httpClient.post<ValidApplicationResponse>(`${this.urlWebApi}/validApplication`, _request);
    }

    signInWithToken(tokenSecurity: string, tokenUser: string) {
        this.accessToken = tokenSecurity;
        this.accessUserDetailsToken = tokenUser;

        // Set the authenticated flag to true
        this._authenticated = true;

        const user = this.getDataUser()

        this._userService.user = {
            email: user.person.workMail,
            id: user.codUser,
            name: user.nameUser,
            status: 'Ok'
        };
    }

    /**
     * Sign in
     *
     * @param credentials
     */
    signIn(credentials: { email: string; password: string }): Observable<any> {
        // Throw error, if the user is already logged in
        if (this._authenticated) {
            return throwError('User is already logged in.');
        }

        return this._httpClient.post('api/auth/sign-in', credentials).pipe(
            switchMap((response: any) => {
                // Store the access token in the local storage
                this.accessToken = response.accessToken;

                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the user on the user service
                this._userService.user = response.user;

                // Return a new observable with the response
                return of(response);
            }),
        );
    }

    /**
     * Sign in using the access token
     */
    signInUsingToken(): Observable<any> {
        // Sign in using the token
        // return this._httpClient.post('api/auth/sign-in-with-token', {
        //     accessToken: this.accessToken,
        // }).pipe(
        //     catchError(() =>

        //         // Return false
        //         of(false),
        //     ),
        //     switchMap((response: any) => {
        //         // Replace the access token with the new one if it's available on
        //         // the response object.
        //         //
        //         // This is an added optional step for better security. Once you sign
        //         // in using the token, you should generate a new one on the server
        //         // side and attach it to the response object. Then the following
        //         // piece of code can replace the token with the refreshed one.
        //         if (response.accessToken) {
        //             this.accessToken = response.accessToken;
        //         }

        //         // Set the authenticated flag to true
        //         this._authenticated = true;

        //         // Store the user on the user service
        //         this._userService.user = response.user;

        //         // Return true
        //         return of(true);
        //     }),
        // );
        this._authenticated = true;

        const user = this.getDataUser()
        // Store the user on the user service
        if (user) {
            this._userService.user = {
                email: user.person.workMail ?? '',
                id: user.codUser ?? '',
                name: user.nameUser ?? '',
                status: 'Ok'
            };
            // this.accessToken = this.accessToken;
            return of(true);

        } else {
            return of(false);
        }
    }

    /**
     * Sign out
     */
    signOut(): Observable<any> {
        // Remove the access token from the local storage
        //localStorage.removeItem('accessToken');
        this._sessionStorage.clear();

        // Set the authenticated flag to false
        this._authenticated = false;

        // Return the observable
        return of(true);
    }

    /**
     * Unlock session
     *
     * @param credentials
     */
    unlockSession(credentials: { email: string; password: string }): Observable<any> {
        return this._httpClient.post('api/auth/unlock-session', credentials);
    }

    /**
     * Check the authentication status
     */
    check(): Observable<boolean> {
        // Check if the user is logged in
        if (this._authenticated) {
            return of(true);
        }

        // Check the access token availability
        if (!this.accessToken) {
            return of(false);
        }

        if (!this.accessUserDetailsToken) {
            return of(false);
        }

        // Check the access token expire date
        if (AuthUtils.isTokenExpired(this.accessToken)) {
            return of(false);
        }

        // If the access token exists, and it didn't expire, sign in using it
        return this.signInUsingToken();
    }
}
