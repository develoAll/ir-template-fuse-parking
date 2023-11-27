import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormMaintenanceModule } from '@shared/modules/form-maintenance.module';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PagesRequest } from '@shared/models/common/pages-request';
import { PagesResponse } from '@shared/models/common/pages-response';
import { MatTableDataSource } from '@angular/material/table';
import { AssignmentResponse } from '@shared/models/response/request-parking-response.interface';
import { MatRadioChange } from '@angular/material/radio';
import { AssignmentRequests } from '@shared/models/request/request-parking-request.interface';
import { ReportAssignmentService } from '@shared/services/parking/report-assignment.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ActionMessageComponent } from '@shared/popups-common/action-message/action-message.component';
import { GenerateTxtComponent } from '../popups/generate-txt/generate-txt.component';
import { ParkingRequestComponent } from '../popups/parking-request/parking-request.component';
import { AssignmentMaintainerResponse } from '@shared/models/response/maintainer-parking-response.interface';
import { AssignmentMaintainerRequests } from '@shared/models/request/maintainer-parking-request.interface';
import { ConfigureMaintenanceComponent } from '../popups/configure-maintenance/configure-maintenance.component';
import { AddMaintenanceComponent } from '../popups/add-maintenance/add-maintenance.component';

@Component({
  selector: 'app-request-maintainer',
  standalone: true,
  imports: [CommonModule,FormMaintenanceModule],
  templateUrl: './request-maintainer.component.html',
  styleUrls: ['./request-maintainer.component.scss']
})
export class RequestMaintainerComponent implements OnInit{

  dateFieldType: number = 1;
  requestsFilterForm: FormGroup;
  requestsTableColumns: string[] = [
    "numberID", "company", "numberDoc", "name",
    "dateRequest", "dateAttention", "numberParking", "state", "action"
  ]
  requestDataSource: MatTableDataSource<AssignmentResponse>
  reportGetRequest: AssignmentRequests = {} as AssignmentRequests
  requestsPageReq: PagesRequest = {
    page: 0,
    size: 10
  }
  requestsPageResp: PagesResponse = {
    currentPage: 0,
    totalItems: 0,
    totalPages: 0
  }
  validExportReport: boolean = true





  maintainerFilterForm: FormGroup;
  maintainerTableColumns: string[] = [
    "numberID", "company", "parking", "numberDoc", "name", "numberPlate",
     "dateAssingment", "dateApplication", "state", "action"
  ]
  maintainerDataSource: MatTableDataSource<AssignmentMaintainerResponse>
  reportGetMantainer: AssignmentMaintainerRequests = {} as AssignmentMaintainerRequests
  maintainerPageReq: PagesRequest = {
    page: 0,
    size: 10
  }
  maintainerPageResp: PagesResponse = {
    currentPage: 0,
    totalItems: 0,
    totalPages: 0
  }



  constructor(
    private _formBuilder: FormBuilder,
    private _reportAssignmentService: ReportAssignmentService,
    private _dialog: MatDialog,
  )
  {
    this.requestsFilterForm = this.setRequestsFormValue();
    this.maintainerFilterForm = this.setMaintainerFormValue();
  }
  
  ngOnInit(): void {
    this.getPageRequest()
  }

  setRequestsFormValue(){
    return this._formBuilder.group({
      company: [ '' , []],
      state: ['', []],
      date: ['', []],
      dateRangeInit: ['', []],
      dateRangeEnd: ['', []],
      typeDoc: ['', []],
      numberDoc: ['', []],
    });
  }
  setMaintainerFormValue(){
    return this._formBuilder.group({
      company: [ '' , []],
      state: ['', []],
      typeDoc: ['', []],
      numberDoc: ['', []],
    });
  }



  onChangeDateField(event: MatRadioChange) {
    this.dateFieldType = event.value;
    this.clearDate();
  }
  clearDate(){
    this.requestsFilterForm.get('date').setValue('');
    this.requestsFilterForm.get('dateRangeInit').setValue('');
    this.requestsFilterForm.get('dateRangeEnd').setValue('');
  }
  getPageRequest(){
    this.requestsPageReq = {
      page: 0,
      size: 10
    }
    this.getRequests();
  }
  getRequests(){
    this.reportGetRequest = {
      ...this.requestsFilterForm.value,
      size: this.requestsPageReq.size,
      page: this.requestsPageReq.page,
    }

    console.log('enviadoReportRequest',this.reportGetRequest);
    

    // this._reportAssignmentService.getSearchSolicitudes(this.reportGetRequest).subscribe(
    //   (response: any) => {
    //     if(response.status){

        let  response = {
            data: {
              assignments: [
              {
                id:               1,
                company:          "IR MANAGEMENT",
                numberDoc:        "76560250",
                name:             "BRENDA HURTADO ALTAMIRANO",
                dateRequest:      "28/11/2023",
                dateAttention:    "28/11/2023",
                numberParking:    "2c-5",
                state:            "APROBADO",
              },
              {
                id:               2,
                company:          "IR MANAGEMENT",
                numberDoc:        "76560250",
                name:             "BRENDA HURTADO ALTAMIRANO",
                dateRequest:      "28/11/2023",
                dateAttention:    "28/11/2023",
                numberParking:    "2c-5",
                state:            "APROBADO",
              },
              {
                id:               3,
                company:          "IR MANAGEMENT",
                numberDoc:        "76560250",
                name:             "BRENDA HURTADO ALTAMIRANO",
                dateRequest:      "28/11/2023",
                dateAttention:    "28/11/2023",
                numberParking:    "2c-5",
                state:            "APROBADO",
              },
              {
                id:               4,
                company:          "IR MANAGEMENT",
                numberDoc:        "76560250",
                name:             "BRENDA HURTADO ALTAMIRANO",
                dateRequest:      "28/11/2023",
                dateAttention:    "28/11/2023",
                numberParking:    "2c-5",
                state:            "APROBADO",
              },
              {
                id:               5,
                company:          "IR MANAGEMENT",
                numberDoc:        "76560250",
                name:             "BRENDA HURTADO ALTAMIRANO",
                dateRequest:      "28/11/2023",
                dateAttention:    "28/11/2023",
                numberParking:    "2c-5",
                state:            "APROBADO",
              },
            ]
            }
          }

          this.requestDataSource = new MatTableDataSource(response.data.assignments)
          this.validExportReport = response.data.assignments.length>0? false: true;
          // this.requestsPageResp = {
          //   currentPage: 0,
          //   totalItems: 0,
          //   totalPages: 0
          // }
    //     }
    //   },
    //   (error: HttpErrorResponse) => {
    //       this.openMessage('Aviso', 'Ocurrió un problema. Vuelva a intentarlo.', 'error');
    //   }
    // )

  }
  dialogShowDetail(item: AssignmentResponse){
    const dialogOpenRequestParking = this._dialog.open(ParkingRequestComponent, {
      disableClose: true,
      data: item
    });

    dialogOpenRequestParking.afterClosed().subscribe(result => {
      if(result == true){
        return;
      }else{
        return;
      }
    });
  }
  dialogGenerateTxt(){
    let item = 5
    const dialogOpenGenerateTxt = this._dialog.open(GenerateTxtComponent, {
      disableClose: true,
      data: {
        id: item
      }
    });

    dialogOpenGenerateTxt.afterClosed().subscribe(result => {
      if(result == true){
        return;
      }else{
        return;
      }
    });
  }



  // mantenedor
  getPageMaintainer(){
    this.maintainerPageReq = {
      page: 0,
      size: 10
    }
    this.getMaintainer();
  }
  getMaintainer(){
    this.reportGetMantainer = {
      ...this.maintainerFilterForm.value,
      size: this.maintainerPageReq.size,
      page: this.maintainerPageReq.page,
    }

    console.log('enviadoReportMaintainer',this.reportGetMantainer);


    let  response = {
      data: {
        assignments: [
        {
          id:               1,
          company:          "IR MANAGEMENT",
          parking:          "Rumbla 2c-5",
          numberDoc:        "76560222",
          name:             "Juan Pelan Orosco Tallo",
          numberPlate:      "ABS-221",
          dateAssingment:   "28/11/2023",
          dateApplication:  "28/11/2023",
          state:            "ASIGNADO",
        },
        {
          id:               2,
          company:          "IR MANAGEMENT",
          parking:          "Rumbla 2c-5",
          numberDoc:        "76560222",
          name:             "Juan Pelan Orosco Tallo",
          numberPlate:      "ABS-221",
          dateAssingment:   "28/11/2023",
          dateApplication:  "28/11/2023",
          state:            "ASIGNADO",
        },
        {
          id:               3,
          company:          "IR MANAGEMENT",
          parking:          "Rumbla 2c-5",
          numberDoc:        "76560222",
          name:             "Juan Pelan Orosco Tallo",
          numberPlate:      "ABS-221",
          dateAssingment:   "28/11/2023",
          dateApplication:  "28/11/2023",
          state:            "ASIGNADO",
        },
        {
          id:               4,
          company:          "IR MANAGEMENT",
          parking:          "Rumbla 2c-5",
          numberDoc:        "76560222",
          name:             "Juan Pelan Orosco Tallo",
          numberPlate:      "ABS-221",
          dateAssingment:   "28/11/2023",
          dateApplication:  "28/11/2023",
          state:            "ASIGNADO",
        },
        {
          id:               5,
          company:          "IR MANAGEMENT",
          parking:          "Rumbla 2c-5",
          numberDoc:        "76560222",
          name:             "Juan Pelan Orosco Tallo",
          numberPlate:      "ABS-221",
          dateAssingment:   "28/11/2023",
          dateApplication:  "28/11/2023",
          state:            "ASIGNADO",
        },
      ]
      }
    }

    this.maintainerDataSource = new MatTableDataSource(response.data.assignments)

  }
  dialogConfigMaintainer(){
    const dialogOpenConfig = this._dialog.open(ConfigureMaintenanceComponent, {
      disableClose: true,
    });

    dialogOpenConfig.afterClosed().subscribe(result => {
      if(result == true){
        return;
      }else{
        return;
      }
    });
  }
  dialogAddMaintainer(){
    const dialogOpenConfig = this._dialog.open(AddMaintenanceComponent, {
      disableClose: true,
    });

    dialogOpenConfig.afterClosed().subscribe(result => {
      if(result == true){
        return;
      }else{
        return;
      }
    });
  }




  tabChanged(tabChangeEvent: MatTabChangeEvent) {
    if (tabChangeEvent.index === 0) {
      this.getPageRequest()
    }else {
      this.getPageMaintainer()
    }
  }
  openMessage(title: string, message: string, type: 'success' | 'warning' | 'error' | 'cancel') {
    const dialogOpen = this._dialog.open(ActionMessageComponent, {
      disableClose: true,
      data: {
        title: title,
        message: message,
        type: type
      }
    });

    dialogOpen.afterClosed().subscribe(result => {
      if(result && (type === 'success' || type === 'cancel')){
        // this._router.navigateByUrl('/solicitude/others');
      }
    });

  }

}
