// Examples 

export interface CalculateRequestType{
    idProcess: number;
    bussinessId: string;
    depaDireccion?: string;
    depaArea?: string;
	depaSeccion?: string;
}

export interface DepartmentOriginRequestType {
	idProcess: number;
    bussinesId?: string;
	depaDireccion?: string;
	depaArea?: string;
}

export interface RegisterAbsenceTypeRequestType {
	absenceType: string;
	minDuration: number;
	maxDuration: number;
	evaPeriod: number;
	status: string;
	uom: string;
	reason: any;
	commentIsActive: string;
	attachIsActive: string;
	origin: string;
}