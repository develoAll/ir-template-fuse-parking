import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormMaintenanceModule } from '@shared/modules/form-maintenance.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AssignmentResponse } from '@shared/models/response/request-parking-response.interface';
import { RejectRequestComponent } from '../reject-request/reject-request.component';

@Component({
  selector: 'app-parking-request',
  standalone: true,
  templateUrl: './parking-request.component.html',
  styleUrls: ['./parking-request.component.scss'],
  imports: [CommonModule,FormMaintenanceModule],
})
export class ParkingRequestComponent {

  inputForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ParkingRequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AssignmentResponse,
    private _formBuilder: FormBuilder,
    private _dialog: MatDialog,
  ){
    this.inputForm = this.setRequestsFormValue();
    console.log(data);
    
  }

  setRequestsFormValue(){
    return this._formBuilder.group({
      numberParking: [ null , [Validators.required]],
      costMonth: [ '' , [Validators.required]],
      numberPlate: [ '' , [Validators.required]],
    });
  }

  approve(){
    this.isLoading = true
    this.dialogRef.close()
  }
  save(){
    this.isLoading = true
    this.dialogRef.close()
  }
  reject(){
    const dialogOpenRejectRequest = this._dialog.open(RejectRequestComponent, {
      disableClose: true,
      data: 1
    });

    dialogOpenRejectRequest.afterClosed().subscribe(result => {
      if(result == true){
        return;
      }else{
        return;
      }
    });
  }
}
