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
  citiyId: number | null = null;

  cities = [
    { label: 'New York', value: 1 },
    { label: 'Rome', value: 2 },
    { label: 'London', value: 3 },
    { label: 'Istanbul', value: 4 },
    { label: 'Paris', value: 5 }
  ];
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
