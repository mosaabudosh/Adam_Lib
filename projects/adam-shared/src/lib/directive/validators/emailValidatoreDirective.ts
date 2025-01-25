import { Directive } from '@angular/core';
import { Validator, UntypedFormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[emailValidator]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: emailValidatorDirective, multi: true }
    ]
})
export class emailValidatorDirective implements Validator {

    constructor() { }

    private regex: RegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    validate(email: UntypedFormControl) {
        if (email.value && !String(email.value).match(this.regex)) {
            return { 'email': true }
        }
        return null;
    }
}
