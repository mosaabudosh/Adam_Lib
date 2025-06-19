import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'adam-lib-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit, OnDestroy {
  public style: object = {};
  _isLoading: boolean = false;
  reloadDataTimer: any;
  isOutlined: boolean = false;
  isRounded: boolean = false;

  @Input() size: string;
  @Input() text: string;
  @Input() color: string = "primary";
  @Input() action: string;
  @Input() rounded: string;
  @Input() isText: boolean = false;
  @Input() badge: string;
  @Input() type: string = "button";
  @Input() value: string;
  @Input() label: string;
  @Input() icon: string;
  @Input() iconPos: any = "left";
  @Input() height: string = "38px";
  @Input() width: string;
  @Input() disabled = false;
  @Input() raised = true;
  @Input() class: string;
  @Input() tooltip: string;
  @Input() tooltipPosition: string;

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
    if (this.color && this.color.concat('reverse')) {
      this.isOutlined = true;
    }

    if (this.rounded && this.rounded.concat('rounded')) {
      this.isRounded = true;
    }
  }

  getStyles() {
    return { '--width': this.width, '--height': this.height };
  }

  onButtonClick(event: any) {
    this.onClick.emit(event);
  }
}
