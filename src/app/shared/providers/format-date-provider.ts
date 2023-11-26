import { Provider } from "@angular/core";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from "@angular/material/core";
import { FORM_DATE_FORMAT } from "../../../../../ir-hr-subvention-micro-webapp/src/app/shared/constants/format-const";

export const MAT_FORMAT_DATE_PROVIDER: Provider[] = [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: FORM_DATE_FORMAT }
]
