import { Component, ViewEncapsulation } from '@angular/core';
import { AdamMessageService } from '../../../../projects/adam-shared/src/public-api';
import { AdamMessageType } from 'adam-shared';

@Component({
  selector: 'app-adam-toast',
  templateUrl: './adam-toast.component.html',
  styleUrl: './adam-toast.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdamToastComponent {

  constructor(private _adamMessageService: AdamMessageService) {

  }

  showSuccess() {
    this._adamMessageService.showTost(AdamMessageType.Success, 'Success', 'Success Message Content');
  }

  showInfo() {
    this._adamMessageService.showTost(AdamMessageType.Info, 'Info', 'Info Message Content');
  }

  showError() {
    this._adamMessageService.showTost(AdamMessageType.Error, 'Error', 'Error Message Content');
  }

  showWarn() {
    this._adamMessageService.showTost(AdamMessageType.Warn, 'Warn', 'Warn Message Content');
  }

  showSecondary() {
    this._adamMessageService.showTost(AdamMessageType.Secondary, 'Secondary', 'Secondary Message Content');
  }

  showContrast() {
    this._adamMessageService.showTost(AdamMessageType.Contrast, 'Contrast', 'Contrast Message Content');
  }

}
