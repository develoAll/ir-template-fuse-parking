import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FunctionsHelperService {

    constructor() {
    }

    isEmpty(value: any): boolean {
        let obj: boolean;
        if (value === undefined || value === null || value.toString().trim() === '') {
            obj = true;
        }
        return obj;
    }

    base64ToArrayBuffer(base64: string): ArrayBuffer {
        const binaryString = window.atob(base64);
        const length = binaryString.length;
        const bytes = new Uint8Array(length);

        for (let i = 0; i < length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
    }
}

export function isEmpty(value: any): boolean {
    if (value == null || value == undefined) return true;

    if (value.__proto__.constructor == String) {
        return value.trim().length == 0;
    }
    if (value.__proto__.constructor == Array) {
        return value.length == 0;
    }
    if (value.__proto__.constructor == Object) {
        return Object.getOwnPropertyNames(value).length == 0;
    }
    return false;
}

export function isNotEmpty(value: any) : boolean {
    return !isEmpty(value);
}

export function trim(value: any): string {
    if (isEmpty(value)) return "";
    return value.toString().trim();
}

export function toNumber(value: any): number {
    if (isEmpty(value)) return null;
    return parseInt(value);
}

export function isNumber(value: any): value is number {
    return !isNaN(toInteger(value));
}

export function toInteger(value: any): number {
    return parseInt(`${value}`, 10);
}