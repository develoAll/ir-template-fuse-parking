import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener, Inject, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SimpleViewDialogConfig } from '@shared/services/simple-view/simple-view.types';

@Component({
    selector     : 'simple-view-dialog',
    templateUrl  : './dialog.component.html',
    styles       : [
        `
            .simple-view-dialog-panel {

                @apply w-80;
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
    imports      : [NgIf, MatButtonModule, MatDialogModule, MatIconModule, NgClass],
})
export class SimpleViewDialogComponent{

    @HostListener('document:keyup', ['$event'])
    onEscape(event: KeyboardEvent) {
        if(event.key === 'Escape') {
            this.dialogRef.close();
        }
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: SimpleViewDialogConfig,
        private dialogRef: MatDialogRef<SimpleViewDialogComponent>)
    {}

}
