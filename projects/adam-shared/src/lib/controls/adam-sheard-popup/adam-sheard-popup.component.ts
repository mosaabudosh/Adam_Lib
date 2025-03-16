import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'lib-adam-sheard-popup',
  templateUrl: './adam-sheard-popup.component.html',
  styleUrl: './adam-sheard-popup.component.scss'
})
export class AdamSheardPopupComponent implements OnInit {
  @ViewChild('content', { static: true }) content: ElementRef;
  modal: NgbModalRef;
  @Output() closed = new EventEmitter();

  constructor(
    public modalService: NgbModal,
  ) { }

  ngOnInit() {
  }

  open(cssClass?: string, theme?: string) {
    this.modal = this.modalService.open(
      this.content,
      {
        centered: true,
        backdrop: 'static',
        windowClass: `${cssClass} ${theme}`,
      }
    );

    this.modal.result.then(() => { this.closed.emit(); }, () => { this.closed.emit() });
  }

  close() {
    this.modal.dismiss();
  }
}
