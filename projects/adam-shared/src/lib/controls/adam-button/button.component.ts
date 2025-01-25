import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'adam-lib-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit, OnDestroy {
  public style: object = {};
  _isLoading: boolean = false;
  reloadDataTimer: any;

  @Input() size: string;
  @Input() text: string = " ";
  @Input() color: string = "primary";
  @Input() action: string;
  @Input() rounded: string;
  @Input() type: string = "button";
  @Input() value: string;
  @Input() label: string;
  @Input() icon: string;
  @Input() iconPos: any = "left";
  @Input() height: string = "35px";
  @Input() width: string = "100px";
  @Input() disabled = false;
  @Input() class: string;


  @Input() set isLoading(value: boolean) {
    this._isLoading = value;
    if (this._isLoading) {
      this.reloadDataTimer = setInterval(() => {
        this.onEndLoading.emit(false);
      }, 60000);
    }
  }

  @Output() onEndLoading = new EventEmitter();
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnDestroy(): void {
    if (this.reloadDataTimer) {
      clearInterval(this.reloadDataTimer);
    }
  }

  ngOnInit() {
  }

  getStyles() {
    return {
      "width": this.width,
      "height": this.height
    };
  }

  onButtonClick(event: any) {
    this.onClick.emit(event);
  }
}
