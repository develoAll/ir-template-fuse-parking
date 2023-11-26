import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Inject, Output, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RejectDialogConfig } from '@shared/services/reject/reject.types';
import { MatInputModule } from '@angular/material/input';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, } from '@angular/forms';

@Component({
    selector     : 'reject-dialog',
    templateUrl  : './dialog.component.html',
    styles       : [
        `
            .reject-dialog-panel {

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
    imports      : [FormsModule, ReactiveFormsModule,NgIf, MatButtonModule, MatDialogModule, MatIconModule, NgClass, MatInputModule],
})
export class RejectDialogComponent{

    @Output() outgoingCommentRejectReason = new EventEmitter<any>();

    public comment:FormControl;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: RejectDialogConfig,
        private dialogRef: MatDialogRef<RejectDialogComponent>
    ){
        this.comment=new FormControl(null,[Validators.required, Validators.maxLength(500)]);
    }

    public getCommentsNoValido(): boolean {
        return this.comment.invalid && (this.comment.touched || this.comment.dirty);
    }

    saveCommentRejectReason(){
        this.outgoingCommentRejectReason.emit(this.comment.value);
        this.dialogRef.close();
    }

}
