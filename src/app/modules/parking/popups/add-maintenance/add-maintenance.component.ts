import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FormMaintenanceModule } from '@shared/modules/form-maintenance.module';

@Component({
  selector: 'app-add-maintenance',
  standalone: true,
  templateUrl: './add-maintenance.component.html',
  styleUrls: ['./add-maintenance.component.scss'],
  imports: [CommonModule,FormMaintenanceModule],
})
export class AddMaintenanceComponent {
  inputForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AddMaintenanceComponent>,
    private _formBuilder: FormBuilder,
  ){
    this.inputForm = this.setRequestsFormValue();
  }

  setRequestsFormValue(){
    return this._formBuilder.group({
      company: [ null , [Validators.required]],
      numberParking: [ '' , [Validators.required]]
    });
  }

  save(){
    this.isLoading = true
    this.dialogRef.close()
  }
}
