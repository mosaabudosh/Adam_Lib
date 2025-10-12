import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-overlay-panel',
  templateUrl: './overlay-panel.component.html',
  styleUrl: './overlay-panel.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class OverlayPanelComponent {
  @ViewChild("customItemOverlayPanel") customItemOverlayPanel: any;
  members = [
    { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
  ];
}
