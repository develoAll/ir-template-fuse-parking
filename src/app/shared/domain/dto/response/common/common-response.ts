export class GeneralResponse {
    comment: string;
    code: string;
    status: number;
}

export class GeneralResponseData<T> extends GeneralResponse {
    data: T;
}
