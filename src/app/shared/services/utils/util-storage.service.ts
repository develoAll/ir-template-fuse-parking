

import { Injectable } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';

@Injectable({ providedIn: 'root' })
export class UtilStorageService {

    constructor(private _sessionStorage: SessionStorageService) {
    }


    setStorageBykey(key: string, value: string) {
        this._sessionStorage.set(key, value);
    }

    getStorageByKey(key: string): string {
        return this._sessionStorage.get(key) ?? '';
    }

    removeSession(key: string) {
        this._sessionStorage.remove(key)
    }

    removeAllSession() {
        this._sessionStorage.clear()
    }


}