import { inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ReturnDialogComponent } from '@shared/services/return/dialog/dialog.component';

@Injectable({providedIn: 'root'})
export class ReturnDialogService
{
    private _matDialog: MatDialog = inject(MatDialog);

    constructor()
    {}

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    open(data): MatDialogRef<ReturnDialogComponent>{

        // Open the dialog
        return this._matDialog.open(ReturnDialogComponent, {
            autoFocus   : false,
            disableClose: true,
            data        : data,
            panelClass  : 'return-dialog-panel',
        });
    }
}
