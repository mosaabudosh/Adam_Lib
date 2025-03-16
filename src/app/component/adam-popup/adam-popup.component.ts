import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdamSheardPopupComponent } from 'adam-shared';

@Component({
  selector: 'app-adam-popup',
  templateUrl: './adam-popup.component.html',
  styleUrl: './adam-popup.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdamPopupComponent extends AdamSheardPopupComponent implements OnInit {
  @Output() onSubmitted: EventEmitter<any> = new EventEmitter();

  constructor(
    modalService: NgbModal
  ) {
    super(modalService);
  }

  ngOnInit(): void {

  }

  save() {
    console.log('save')
    this.onSubmitted.emit();
    this.close();
  }
}
