import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormMaintenanceModule } from '@shared/modules/form-maintenance.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reject-request',
  standalone: true,
  templateUrl: './reject-request.component.html',
  styleUrls: ['./reject-request.component.scss'],
  imports: [CommonModule,FormMaintenanceModule],
  encapsulation: ViewEncapsulation.None,
})
export class RejectRequestComponent {

  inputForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<RejectRequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
  ){
    this.inputForm = this.setRequestsFormValue();
  }

  setRequestsFormValue(){
    return this._formBuilder.group({
      textReject: [ '' , [Validators.required]],
    });
  }

  send(){
    this.isLoading = true
  }

}
