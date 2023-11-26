import { inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogConfig } from '@shared/services/confirmation/confirmation.types';
import { ConfirmationDialogComponent } from '@shared/services/confirmation/dialog/dialog.component';
import { merge } from 'lodash-es';

@Injectable({ providedIn: 'root' })
export class ConfirmationDialogService {
    private _matDialog: MatDialog = inject(MatDialog);
    private _defaultConfig: ConfirmationDialogConfig = {
        title: 'Confirm action',
        message: 'Are you sure you want to confirm this action?',
        icon: {
            show: true,
            name: 'heroicons_outline:exclamation-triangle',
            color: 'warn',
        },
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
        },
        dismissible: false,
    };

    /**
     * Constructor
     */
    constructor() {
    }

    dialogWithConfirm(title: string, message: string, labelConfirm: string, labelCancel: string): ConfirmationDialogConfig {
        return {
            title: title,
            message: message,
            icon: {
                show: true,
                name: "table_icons:check",
                color: "info"
            },
            actions: {
                confirm: {
                    show: true,
                    label: labelConfirm,
                    color: 'primary',
                },
                cancel: {
                    show: true,
                    label: labelCancel,
                },
                switchOrder: true
            },
            dismissible: false,
        };
    }

    dialogSuccess(title: string, message: string, labelConfirm: string = "Aceptar"): ConfirmationDialogConfig {
        return {
            title: title,
            message: message,
            icon: {
                show: true,
                name: "table_icons:check",
                color: "info"
            },
            actions: {
                confirm: {
                    show: true,
                    label: labelConfirm,
                    color: 'primary',
                },
                cancel: {
                    show: false,
                    label: '',
                },
                switchOrder: true
            },
            dismissible: false,
        };
    }

    dialogWarning(title: string, message: string, labelConfirm: string = "Aceptar"): ConfirmationDialogConfig {
        return {
            title: title,
            message: message,
            icon: {
                show: true,
                name: "table_icons:alert-triangle",
                color: "warn"
            },
            actions: {
                confirm: {
                    show: true,
                    label: labelConfirm,
                    color: 'primary',
                },
                cancel: {
                    show: false,
                    label: '',
                },
                switchOrder: true
            },
            dismissible: false,
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    open(config: ConfirmationDialogConfig = {}): MatDialogRef<ConfirmationDialogComponent> {
        // Merge the user config with the default config
        const userConfig = merge({}, this._defaultConfig, config);

        // Open the dialog
        return this._matDialog.open(ConfirmationDialogComponent, {
            autoFocus: false,
            disableClose: !userConfig.dismissible,
            data: userConfig,
            panelClass: 'confirmation-dialog-panel',
        });
    }
}
