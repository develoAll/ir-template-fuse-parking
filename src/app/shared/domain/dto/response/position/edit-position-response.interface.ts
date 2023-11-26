import { TypeCategoryPosition, TypeStatusPosition } from "@shared/domain/models/position/process-position-detail.model";

export class EditPositionResponseDto {
    idProcess: number;
    nameProcess: string;
    yearProcess: number;
    processDetail: ProcessDetail[];
}

export class ProcessDetail {
    id: number;
    idProcess: number;
    codPositionHcm: string;
    namePosition: string;
    newPosition: string;
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
    isStatusSend: string;
    statusPosition: TypeStatusPosition;
    statusApprove: string;
    categoryPosition: TypeCategoryPosition;
    nameDepartment: string;
    bussinessId: string;
    documentNumber: string;
    comment: string;
    codeDepartment: string;
    dateSend: string;
    department3: string;
    department4: string;
    department5: string;
    userCreate: string;
    dateCreate: string;
    userUpdate: string;
    dateUpdate: string;
    userCreateName: string;
    active: boolean;
    flagAutoApprove: number;
}
