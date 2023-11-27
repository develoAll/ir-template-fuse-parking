import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormMaintenanceModule } from '@shared/modules/form-maintenance.module';

@Component({
  selector: 'app-generate-txt',
  standalone: true,
  templateUrl: './generate-txt.component.html',
  styleUrls: ['./generate-txt.component.scss'],
  imports: [CommonModule,FormMaintenanceModule],
})
export class GenerateTxtComponent {

  inputForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<GenerateTxtComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
  ){
    this.inputForm = this.setRequestsFormValue();
  }

  setRequestsFormValue(){
    return this._formBuilder.group({
      company: [ null , [Validators.required]],
    });
  }

  accept(){
    this.isLoading = true
  }

}
