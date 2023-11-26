import { NgClass, NgIf } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmationDialogConfig } from '@shared/services/confirmation/confirmation.types';

@Component({
    selector     : 'confirmation-dialog',
    templateUrl  : './dialog.component.html',
    styles       : [
        `
            .confirmation-dialog-panel {

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
export class ConfirmationDialogComponent
{
    /**
     * Constructor
     */
    constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogConfig)
    {
    }

}
