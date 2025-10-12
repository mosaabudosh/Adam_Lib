import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
    selector: 'lib-adam-overlay-panel',
    templateUrl: './adam-overlay-panel.component.html',
    styleUrl: './adam-overlay-panel.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class AdamOverlayPanelComponent {
    @ViewChild("_op") _op: OverlayPanel;

    @Input("overlayPanelElementRef") overlayPanelElementRef?: any;
    @Input() showCloseIcon: boolean = true;
    @Input() dismissable: boolean = true;

    toggle(event: any) {
        this._op.toggle(event)
    }

    hide(){
        this._op.hide();
    }

}
