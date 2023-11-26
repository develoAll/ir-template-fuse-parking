export interface DeletePositionRequest {
    id: number;
    idProcess: number;
    codPositionHcm: string;
    namePosition: string;
    employee: string;
    dateFinish: string;
    isActive: number;
    statusPosition: string;
    statusApprove: string;
    categoryPosition: string;
    nameDepartment: string;
    documentNumber: string;
    codeDepartment: string;
    bussinessId: string;
    comment: string;
    userCreateName: string;
    user: string;
    dateSend: string;
    salaryGrade: string;
    foodAmount: number;
    salaryAmount: number;
    bonusAmount: number;
    department3: string;
    department4: string;
    department5: string;
    active: boolean;
}
