import { Component } from '@angular/core';

@Component({
  selector: 'lib-arview',
  templateUrl: './arview.component.html',
  styleUrl: './arview.component.scss'
})

export class ARViewComponent {
  imageUrl: string | undefined;

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageUrl = URL.createObjectURL(file); // Blob URL instead of base64
    }
  }
}
