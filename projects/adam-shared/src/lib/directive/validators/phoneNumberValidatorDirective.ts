import { Directive } from '@angular/core';
import { Validator, UntypedFormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[phoneNumberValidator]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: PhoneNumberValidatorDirective, multi: true }
    ]
})
export class PhoneNumberValidatorDirective implements Validator {

    constructor() { }

    private regex: RegExp = new RegExp(/(^[+]?[0-9]*$)/);

    validate(phoneNumber: UntypedFormControl) {
        if (phoneNumber.value && !String(phoneNumber.value).match(this.regex)) {
            return { 'phoneNumber': true }
        }
        return null;
    }
}
