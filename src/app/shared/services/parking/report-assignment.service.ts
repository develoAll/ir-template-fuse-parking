import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AssignmentRequests } from "@shared/models/request/request-parking-request.interface";
import { AssignmentResponse } from "@shared/models/response/request-parking-response.interface";
import { GeneralResponseData } from "app/shared/models/common/common-response";
import { environment } from "environments/environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ReportAssignmentService {

    private urlWebApi: string;
    constructor(
        private _http: HttpClient) {
        this.urlWebApi = `${environment.serverUriBaseParkingManagerApi}/report`;
    }

    getSearchSolicitudes(request: AssignmentRequests): Observable<GeneralResponseData<AssignmentResponse>> {
        return this._http.post<GeneralResponseData<AssignmentResponse>>(`${this.urlWebApi}/employee-assignment`, request);
    }

    httpHeaders(): HttpHeaders {
        let headers = new HttpHeaders();
        headers = headers.set('user', 'prueba-tmp');
        return headers;
    }

}