import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { FuseAlertComponent } from '@fuse/components/alert';
import { SearchPositionKeyDetail } from '@shared/domain/dto/response/position/search-position-key-response.interface';
import { FormMaintenanceModule } from '@shared/modules/form-maintenance.module';
import { PositionService } from '@shared/services/positions/position.service';
import { FunctionsHelperService } from '@shared/services/utils/functions-helper.service';

interface DataPopus {
  idProcess: number
  addressDepartment: string
  apartmentArea: string
  departmentSection: string
}

@Component({
  selector: 'app-search-positions',
  templateUrl: './search-positions.component.html',
  styleUrls: ['./search-positions.component.scss'],
  standalone: true,
  imports: [FormMaintenanceModule, FuseAlertComponent, MatButtonModule, MatMenuModule]
})
export class SearchPositionsComponent {



  searchList: SearchPositionKeyDetail[] = []
  selectTemp: SearchPositionKeyDetail = new SearchPositionKeyDetail();
  textInput: string = '';
  flagSelect: boolean = false;

  constructor(public dialogRef: MatDialogRef<SearchPositionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataPopus,
    private _helperService: FunctionsHelperService,
    private _positionService: PositionService) {
  }

  searchTextProcess() {
    let text = this.textInput;

    if (this.selectTemp !== null && !this._helperService.isEmpty(this.selectTemp.namePosition)) {
      this.flagSelect = false;
      this.selectTemp = new SearchPositionKeyDetail();
    }

    console.log('Paso 1', text)
    if (this._helperService.isEmpty(text) || text.length < 5) {
      this.searchList = []
      return false;
    }
    console.log('Paso 2', text)

    text = text.toLocaleLowerCase();


    setTimeout(() => {

      this._positionService.getSerachPositionByKey(this.data.idProcess, this.data.addressDepartment, this.data.apartmentArea, this.textInput
        , this.data.departmentSection).subscribe(resp => {
          if (resp) {
            const dataResp = resp.data.processDetail;
            this.searchList = [...dataResp]
            console.log('Paso 3', this.searchList)
          }
        })

    }, 1500)

  }

  selectPosition(element: SearchPositionKeyDetail) {
    this.flagSelect = true;
    this.selectTemp = element
    this.textInput = element.namePosition
    this.searchList = [];
  }

  add() {
    this.dialogRef.close(this.selectTemp)
  }

}


