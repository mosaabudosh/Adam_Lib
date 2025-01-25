import { Directive, HostListener, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, take } from 'rxjs/operators';
import { FormGroupDirective } from '@angular/forms';

@Directive({
  selector: '[InvalidControlScroll]',
  providers: [FormGroupDirective]
})
export class InvalidControlScrollDirective {
  private get containerEl(): HTMLElement {
    let windowContext: any = window;
    if (window.frameElement) {
      windowContext = window.parent;
    }
    return windowContext;
  }

  constructor(
    private el: ElementRef
  ) {}

  @HostListener("ngSubmit") onSubmit() {
      this.scrollToFirstInvalidControl();
  }

  private scrollToFirstInvalidControl() {
    const firstInvalidControl: HTMLElement = this.el.nativeElement.querySelector(
      ".ng-invalid"
    );

    this.containerEl.scroll({
      top: this.getTopOffset(firstInvalidControl),
      left: 0,
      behavior: "smooth"
    });

    fromEvent(this.containerEl, "scroll")
      .pipe(
        debounceTime(100),
        take(1)
      )
      .subscribe(() => firstInvalidControl?.focus());
  }

  private getTopOffset(controlEl: HTMLElement) {
    const labelOffset = 150;
    if(controlEl != null){
      return controlEl.getBoundingClientRect().top + window.scrollY - labelOffset;
    }
  }
}
