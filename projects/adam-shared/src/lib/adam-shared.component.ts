import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'lib-AdamShared',
  standalone: false,
  template: `
    <p>
      adam-shared works!
    </p>
  `,
  styles: ``
})
export class AdamSharedComponent {

  constructor(private translateservice: TranslateService, private primengConfig: PrimeNGConfig) {
    this.translateservice.use('ar');
    this.primengConfig.ripple = true;
  }
}
