import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Urls } from "@shared/constants/urls/urls.constant";
import { GeneralResponseData } from "@shared/domain/dto/response/common/common-response";
import { DepartmentOriginResponse } from "@shared/domain/dto/response/department-origin-response.interface";
import { DepartmentResponse } from "@shared/domain/dto/response/masters/department-response.interface";
import { GradeSalaryResponse } from "@shared/domain/dto/response/masters/grade-salary-response.interface";
import { Observable } from "rxjs";
import { removeNullValuesFromQueryParams } from "@shared/services/positions/positions.service";
import { DepartmentOriginRequestType } from "@shared/types/request.struct.type";

@Injectable({ providedIn: 'root' })
export class MastersService {

    urlWebApi: string;
    constructor(private _http: HttpClient) {
        this.urlWebApi = `${Urls.BUDGET_TRACK_API}/masters`;
    }

    getDepartmentAll(bussinesId: string): Observable<GeneralResponseData<DepartmentResponse[]>> {
        return this._http.get<GeneralResponseData<DepartmentResponse[]>>(`${this.urlWebApi}/departmentAll?bussinesId=${bussinesId}`);
    }


    getDepartmentOringinAll(idProcess: number, addressDepartment: string, apartmentArea: string, bussinesId: string): Observable<GeneralResponseData<DepartmentOriginResponse[]>> {

        let request = `?idProcess=${idProcess}&depaDireccion=${addressDepartment}&depaArea=${apartmentArea}&bussinesId=${bussinesId}`;
        //request += 
        //depaArea
        //depaSeccion
        return this._http.get<GeneralResponseData<DepartmentOriginResponse[]>>
            (`${this.urlWebApi}/departmentOrigin${request}`);
    }

    getGradesSalaryAll(): Observable<GeneralResponseData<GradeSalaryResponse[]>> {
        return this._http.get<GeneralResponseData<GradeSalaryResponse[]>>(`${this.urlWebApi}/gradesSalaryAll`);
    }

    public getLstDepartmentOrigin(param: DepartmentOriginRequestType) {
        const headers = new HttpHeaders()
            .append('Content-Type', 'application/json')
            .append('Accept', 'application/json');

        const params = new HttpParams()
            .set('idProcess', param.idProcess)
            .set('bussinesId', param.bussinesId)
            .set('depaDireccion', param.depaDireccion)
            .set('depaArea', param.depaArea);

        const url = Urls.DEPARTMENT_ORIGIN;

        return this._http.get(url, { headers: headers, params: removeNullValuesFromQueryParams(params) });
    }
}
