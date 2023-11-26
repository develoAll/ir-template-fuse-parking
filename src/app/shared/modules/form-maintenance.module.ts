import { NgModule } from "@angular/core";
import { AsyncPipe, CurrencyPipe, DatePipe, NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { FuseCardComponent } from '@fuse/components/card';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatTableModule } from "@angular/material/table";
import { RouterLink } from "@angular/router";
import { MatDividerModule } from "@angular/material/divider";
import { FuseAlertComponent } from "@fuse/components/alert";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatChipsModule } from "@angular/material/chips";
import { TextFieldModule } from "@angular/cdk/text-field";
import { LOCALE_ID } from '@angular/core';
import { MatRadioModule } from "@angular/material/radio";

const APP_DATE_FORMAT = {
  parse: {
    dateInput: "dd",
  },
  display: {
    dateInput: "dd/MM/yyyy",
    monthYearLabel: "yyyy",
    dateA11yLabel: "dd",
    monthYearA11yLabel: "yyyy",
  },
};

@NgModule({
  imports: [
    NgIf,
    MatProgressBarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSortModule,
    NgFor,
    NgTemplateOutlet,
    MatPaginatorModule,
    NgClass,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatRippleModule,
    AsyncPipe,
    CurrencyPipe,
    FuseCardComponent,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,
    MatDatepickerModule,
    MatTableModule,
    RouterLink,
    MatDividerModule,
    DatePipe,
    MatTabsModule,
    FormsModule,
    TextFieldModule,
    MatButtonToggleModule,
    MatChipsModule
  ],
  exports: [
    NgIf,
    MatProgressBarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSortModule,
    NgFor,
    NgTemplateOutlet,
    MatPaginatorModule,
    NgClass,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatRippleModule,
    AsyncPipe,
    CurrencyPipe,
    FuseCardComponent,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,
    MatDatepickerModule,
    MatTableModule,
    RouterLink,
    MatDividerModule,
    DatePipe,
    MatTabsModule,
    FormsModule,
    TextFieldModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatRadioModule

  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMAT }
  ]
})
export class FormMaintenanceModule { }
