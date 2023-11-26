/* No borrar */
export interface HttpErrorStruct {
    code: string;
    comment: string;
    status: number;
    data: string;
}

export interface ResponseStruct {
    code: string;
    status: number;
    comment: string;
    data: AbsenceTypesResponseType[] 
		| ProcessResponseType[];
}

// -----------------------------------------------------------------------------------------------------
// @ Examples 
// -----------------------------------------------------------------------------------------------------

export interface AbsenceTypesResponseType {
	userCreate: string;
	dateCreate: string;
	userUpdate: string;
	dateUpdate: string;
	absenceTypeId: number;
	absenceType: string;
	minDuration: number;
	maxDuration: number;
	evaPeriod: number;
	status: string;
	uom: string;
	reason?: any;
	commentIsActive: string;
	attachIsActive: string;
	origin: string;
}

export interface ProcessResponseType { // LstProcess && RegisterProcess
    idProcess: number;
    nameProcess: string;
    codPayrollConfig: string;
    dateOpening: string;
    limit: string;
    yearProcess: number;
    dateInit: string;
    dateFinish: string;
    active: boolean;
}