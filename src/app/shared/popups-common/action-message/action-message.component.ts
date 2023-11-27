import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormMaintenanceModule } from 'app/shared/modules/form-maintenance.module';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-action-message',
  templateUrl: './action-message.component.html',
  styleUrls: ['./action-message.component.scss'],
  standalone   : true,
  imports      : [FormMaintenanceModule]
})
export class ActionMessageComponent implements OnInit, OnDestroy{

  private _unsubscribeAll: Subject<any> = new Subject<any>();
  
  constructor(
      public dialogRefVerificationCode: MatDialogRef<ActionMessageComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {

  }
  
  ngOnDestroy(): void
  {
      this._unsubscribeAll.next(null);
      this._unsubscribeAll.complete();
  }

  accept(){
    this.dialogRefVerificationCode.close(true);
  }

}
