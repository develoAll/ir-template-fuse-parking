export class SearchPositionKeyResponse {
    idProcess: number;
    nameProcess: string;
    yearProcess: number;
    processDetail: SearchPositionKeyDetail[];
}

export class SearchPositionKeyDetail {
    id: number;
    idProcess: number;
    codPositionHcm: string;
    namePosition: string;
    employee: string;
    foodAmount: number;
    salaryAmount: number;
    bussinessId: string;
    documentNumber: string;
    department3: string;
    department4: string;
    active: boolean;
}
