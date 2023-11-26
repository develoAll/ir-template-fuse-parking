import { UserAuth } from "@shared/domain/models/user-auth.model";


export interface ValidApplicationResponse {
    code: string;
    status: number;
    comment: string;
    token: string;
    tokenSeguridad: string;
}

export interface DataUserResponseDto {
    sub: string;
    data: UserAuth;
    iat: number;
    exp: number;
}


