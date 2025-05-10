import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdamSheardPopupComponent } from '../adam-sheard-popup/adam-sheard-popup.component';

@Component({
  selector: 'lib-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrl: './confirmation-popup.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ConfirmationPopupComponent extends AdamSheardPopupComponent implements OnInit {

  confirmLabel: string = 'Confirm';
  cancelLabel: string = 'Cancel';
  title: string = 'Confirm';
  icon: string | null ;//'assets/images/delete.png';
  message: string = "Are you sure you want to do this action ";
  confirmButtonColor: string = 'positive-reverse';
  cancelButtonColor: string = 'dangerous-reverse';


  @Output() onCancelClick = new EventEmitter();
  @Output() onConfirmClick = new EventEmitter();

  constructor(modalService: NgbModal) {
    super(modalService);
  }

  ngOnInit() {
  }


  ngOnDestroy(): void {
  }

  cancelClicked() {
    this.onCancelClick.emit();
    this.close();
  }

  confirmClicked() {
    this.onConfirmClick.emit();
    this.close();
  }

}
