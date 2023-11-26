import { environment } from '@environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class Urls {

  // Example
  public static readonly ABSENCES_API = environment.URL_ABSENCES_BACKEND + '/api/ir-hr-backoffice-absences-api/v1';

  public static ABSENCE_TYPE = Urls.ABSENCES_API + '/absence-type';
  public static ABSENCE_TYPE_BY_REQUEST = Urls.ABSENCE_TYPE + '/request';
  public static ABSENCE_TYPE_STATUS_UPDATE = Urls.ABSENCE_TYPE + '/{id}/change-status';

  public static PARAMETERS_ALL = Urls.ABSENCES_API + '/masters/parametersAll';
  public static PARAMETERS_BY_CODPARAM = Urls.ABSENCES_API + '/masters/parameter';
}