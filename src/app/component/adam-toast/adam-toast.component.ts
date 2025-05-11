import { Component } from '@angular/core';
import { AdamMessageService } from '../../../../projects/adam-shared/src/public-api';

@Component({
  selector: 'app-adam-toast',
  templateUrl: './adam-toast.component.html',
  styleUrl: './adam-toast.component.scss'
})
export class AdamToastComponent {

  constructor(private _adamMessageService: AdamMessageService) {

  }

  showSuccess() {
    this._adamMessageService.showSuccess();
  }

  showInfo() {
    this._adamMessageService.showInfo();
  }

  showError() {
    this._adamMessageService.showError();
  }

  showWarn() {
    this._adamMessageService.showWarn();
  }

}
