export class GeneralResponse {
    message: string;
    idGenerated: string;
    status: boolean;
}

export class GeneralResponseData<T> extends GeneralResponse {
    data: T;
}
