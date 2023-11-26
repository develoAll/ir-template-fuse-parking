export interface ViewPositionResponse {
    idProcess: number;
    nameProcess: string;
    yearProcess: number;
    processDetail: ViewPositionProcessDetail[];
}

export interface ViewPositionProcessDetail {
    id: number;
    idProcess: null;
    codPositionHcm: null | string;
    namePosition: string;
    newPosition: null | string;
    employee: string;
    dateContract: string;
    supportPosition: string;
    responsable: string;
    workExperience: number;
    academicStudies: string;
    salaryGrade: string;
    foodAmount: number;
    salaryAmount: number;
    bonusAmount: number;
    salaryProposed: number;
    dateStimated: string;
    dateFinish: string;
    isStatusSend: null;
    statusPosition: string;
    nameStatusPosition: string;
    statusApprove: StatusApprove;
    nameStatusApprove: string;
    categoryPosition: CategoryPosition;
    nameCategoryPosition: CategoryPosition;
    nameDepartment: string;
    bussinessId: string;
    company: null;
    documentNumber: string;
    comment: null | string;
    codeDepartment: string;
    userCreate: null;
    dateCreate: null;
    userUpdate: null;
    dateUpdate: null;
    active: boolean;
}

export enum CategoryPosition {
    Eli = "ELI",
    New = "NEW",
    Rec = "REC",
}

export enum StatusApprove {
    APR = "APR",
}

export enum StatusPosition {
    Aprb = "APRB",
    Pger = "PGER",
}
