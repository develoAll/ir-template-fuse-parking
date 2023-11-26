import { inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RejectDialogConfig } from '@shared/services/reject/reject.types';
import { RejectDialogComponent } from '@shared/services/reject/dialog/dialog.component';
import { merge } from 'lodash-es';

@Injectable({providedIn: 'root'})
export class RejectDialogService
{
    private _matDialog: MatDialog = inject(MatDialog);
    private _defaultConfig: RejectDialogConfig = {
        title      : 'Confirm action',
        message    : 'Are you sure you want to confirm this action?',
        icon       : {
            show : true,
            name : 'heroicons_outline:exclamation-triangle',
            color: 'warn',
        },
        actions    : {
            confirm: {
                show : true,
                label: 'Confirm',
                color: 'warn',
            },
            cancel : {
                show : true,
                label: 'Cancel',
            },
        },
        dismissible: false,
    };

    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    open(config: RejectDialogConfig = {}): MatDialogRef<RejectDialogComponent>
    {
        // Merge the user config with the default config
        const userConfig = merge({}, this._defaultConfig, config);

        // Open the dialog
        return this._matDialog.open(RejectDialogComponent, {
            autoFocus   : false,
            disableClose: !userConfig.dismissible,
            data        : userConfig,
            panelClass  : 'reject-dialog-panel',
        });
    }
}
