import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FormMaintenanceModule } from '@shared/modules/form-maintenance.module';

@Component({
  selector: 'app-configure-maintenance',
  standalone: true,
  templateUrl: './configure-maintenance.component.html',
  styleUrls: ['./configure-maintenance.component.scss'],
  imports: [CommonModule,FormMaintenanceModule],
})
export class ConfigureMaintenanceComponent {

  inputForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ConfigureMaintenanceComponent>,
    private _formBuilder: FormBuilder,
  ){
    this.inputForm = this.setRequestsFormValue();
  }

  setRequestsFormValue(){
    return this._formBuilder.group({
      company: [ null , [Validators.required]],
      text: [ '' , [Validators.required]],
      costMonth: [ '' , [Validators.required]],
    });
  }

  save(){
    this.isLoading = true
    this.dialogRef.close()
  }

}
