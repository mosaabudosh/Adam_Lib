import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, UntypedFormGroup } from '@angular/forms';
import { MustMatch } from './validators/must-match.validator';

@Directive({
  selector: '[mustMatch]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true }]
})
export class MustMatchDirective {

  @Input('mustMatch') mustMatch: string[] = [];

  validate(formGroup: UntypedFormGroup): any {
    return MustMatch(this.mustMatch[0], this.mustMatch[1])(formGroup);
  }

}
