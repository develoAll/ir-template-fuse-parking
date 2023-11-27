import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormMaintenanceModule } from '@shared/modules/form-maintenance.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-parking',
  standalone: true,
  templateUrl: './manage-parking.component.html',
  styleUrls: ['./manage-parking.component.scss'],
  imports: [CommonModule,FormMaintenanceModule],
})
export class ManageParkingComponent {

  inputForm: FormGroup;
  isLoading: boolean = false;
  validParkingManager: boolean = false;
  shareAssignment: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ManageParkingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private _formBuilder: FormBuilder,
  ){
    this.inputForm = this.setRequestsFormValue();
  }

  setRequestsFormValue(){
    return this._formBuilder.group({
      typeDoc: [ null , [Validators.required]],
      numberDoc: [ '' , [Validators.required]],
      name: [ {value:'', disabled: true} , []],
    });
  }

  validMange(){
    this.validParkingManager = true
  }

  save(){

  }
}
