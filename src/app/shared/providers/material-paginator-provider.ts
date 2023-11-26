import { Provider } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";
import { MatPaginatorIntlEs } from "../../../../../ir-hr-subvention-micro-webapp/src/app/shared/services/mat-paginator-intl-es.service";

export const MAT_PAGINATOR_PROVIDER: Provider[] = [
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlEs },
]
