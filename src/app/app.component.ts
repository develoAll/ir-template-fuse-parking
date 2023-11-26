import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Constants } from '@shared/constants/general/constants.constant';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss'],
    standalone : true,
    imports    : [RouterOutlet,NgxSpinnerModule],
})
export class AppComponent
{
    spintercept = Constants.SPINNER_CALL_SERVICES;
    sploading = Constants.SPINNER_LOADING_DATA;
    
    constructor(){}
}
