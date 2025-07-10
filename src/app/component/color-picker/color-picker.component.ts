import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ColorPickerComponent {

  color1: any = '#F0AD4E';
  color2: any = '#F0AD4E';
  color3: any = '#F0AD4E';

  onColorChange(event: any) {
    console.log(event?.value)
  }
}
