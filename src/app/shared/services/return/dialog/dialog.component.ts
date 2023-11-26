import { NgClass, NgIf, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormControl,FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LstPositionsResponseType } from '@shared/types/response.struct.type';
import { Parameters } from '@shared/constants/general/parameters.constant';

@Component({
    selector     : 'return-dialog',
    templateUrl  : './dialog.component.html',
    styles       : [
        `
            .return-dialog-panel {

                @apply w-90;
                @apply min-w-72;

                .mat-mdc-dialog-container {

                    .mat-mdc-dialog-surface {
                        padding: 0 !important;
                    }
                }
            }
        `,
    ],
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [FormsModule, ReactiveFormsModule, NgFor, NgIf, MatButtonModule, MatDialogModule, MatIconModule, NgClass, MatInputModule],
})
export class ReturnDialogComponent implements OnInit{

    @Input() lstPositionIncomingDataSelected:LstPositionsResponseType[];
    @Output() outgoingLstPositionSetReason = new EventEmitter<any>()
    formReturnPositions=new FormGroup({});

    devStatus=Parameters.STATUS_POSITION_BT00000002_DEV;

    constructor(private dialogRef: MatDialogRef<ReturnDialogComponent>){
    }

    ngOnInit() {
        this.lstPositionIncomingDataSelected.forEach((element, index) => {
            this.formReturnPositions.addControl("comment-"+String(index), new FormControl(element.comment, [Validators.required, Validators.maxLength(500)]));
        });
    }

    fieldComment(index:number) {
        return this.formReturnPositions.get("comment-"+String(index));
    }

    getFieldCommentNoValid(index:number): boolean {
        return this.fieldComment(index).invalid && (this.fieldComment(index).touched || this.fieldComment(index).dirty);
    }

    updateDataPositions() {
        return this.lstPositionIncomingDataSelected.forEach((element, index) => {
            element.comment = this.fieldComment(index).value;
            element.statusApprove = this.devStatus;
        });
    }

    saveReasonReturnPosition(){
        this.outgoingLstPositionSetReason.emit(this.updateDataPositions());
        this.dialogRef.close();
    }
}
