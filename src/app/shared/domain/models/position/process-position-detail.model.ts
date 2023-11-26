export class ProcessPositionDetailModel {
    id: number
    codPositionHcm: string;
    namePosition: string;
    newPosition: string;
    employee: string;
    dateContract: string;
    supportPosition: string;
    workExperience: number
    academicStudies: string;
    isActive: number
    statusPosition: TypeStatusPosition;
    categoryPosition: TypeCategoryPosition;
    nameDepartment: string;
    documentNumber: string;
    codeDepartment: string;
    dateFinish: string;
    dateStimated: string;
    salaryProposed: number;
    comment: string;
    user: string;
    responsible: string;
    salaryGrade: string;
    foodAmount: number;
    salaryAmount: number;
    bonusAmount: number;
    statusApprove: string;
    bussinessId: string;
    dateSend: string;
    department3: string;
    department4: string;
    department5: string;
    userCreateName: string;
    active: boolean;
    flagApprove?: boolean;
    flagDecline?: boolean;
    flagReturn?: boolean;
}

export enum TypeStatusPosition {
    GERE = "GERE",
    PVAL = "PVAL",
    PGER = "PGER",
    APRB = "APRB"
}

export enum TypeCategoryPosition {
    NEW = "NEW",
    ASC = "ASC",
    REC = "REC",
    ELI = "ELI"
}


export enum TypeEvaluationPosition {
    APR = "APR",
    REC = "REC",
    DEV = "DEV"
}