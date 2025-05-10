import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {

  uploadedFiles: any[] = [];

  fileUploaded(event: any) {
    this.uploadedFiles = event;
  }

}
