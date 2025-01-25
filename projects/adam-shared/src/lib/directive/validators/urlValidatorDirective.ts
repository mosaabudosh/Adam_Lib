import { Directive, ElementRef } from '@angular/core';
import { Validator, UntypedFormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[urlValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: UrlValidatorDirective , multi: true }
  ]
})
export class UrlValidatorDirective  implements Validator {

  constructor(private elementRef: ElementRef) { }

  private regex: RegExp = new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/);
  

  validate(url: UntypedFormControl) {
    if (url.value && !String(url.value).match(this.regex)) {
      return { 'url': true }
    }

    return null;
  }

}
