import { inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SimpleViewDialogComponent } from '@shared/services/simple-view/dialog/dialog.component';
import { SimpleViewDialogConfig } from '@shared/services/simple-view/simple-view.types';
import { merge } from 'lodash';

@Injectable({ providedIn: 'root' })
export class SimpleViewDialogService {
    private _matDialog: MatDialog = inject(MatDialog);
    private _defaultConfig: SimpleViewDialogConfig = {
        title: 'Confirm action',
        id: 1,
        message: 'Are you sure you want to confirm this action?',
        actions: {
            confirm: {
                show: true,
                label: 'Confirm',
                color: 'warn',
            },
            cancel: {
                show: true,
                label: 'Cancel',
            },
        }
    };

    constructor() {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    open(config:SimpleViewDialogConfig): MatDialogRef<SimpleViewDialogComponent> {
        // Merge the user config with the default config
        const userConfig = merge({}, this._defaultConfig, config);

        // Open the dialog
        return this._matDialog.open(SimpleViewDialogComponent, {
            autoFocus: false,
            disableClose: true,
            data: userConfig,
            panelClass: 'simple-view-dialog-panel',
        });
    }
}
