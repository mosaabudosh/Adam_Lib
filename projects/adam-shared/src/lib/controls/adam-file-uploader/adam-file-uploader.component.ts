import { Component, OnInit, Input, Output, EventEmitter, ViewContainerRef, OnDestroy, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DeletionTypes } from '../../enum/enums';
import { ConfirmationPopupComponent } from '../confirmation-popup/confirmation-popup.component';
import { ComponentFactoryResolverService } from '../../services/component-factory-resolver.service';

declare const scanner: any;
let imagesScanned: any[] = [];

@Component({
  selector: 'lib-adam-file-uploader',
  templateUrl: './adam-file-uploader.component.html',
  styleUrl: './adam-file-uploader.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdamFileUploaderComponent implements OnInit, OnDestroy {

  isChooseButtonDisabled: any = true;
  auto: any;
  _uploadedFiles: any[];
  fileSource: File[] = [];

  _maxUploadedFiles: any = null;
  @Input() set maxUploadedFiles(value: any) {
    this._maxUploadedFiles = value;
    this.isChooseButtonDisabled = this._uploadedFiles ? (this._maxUploadedFiles && this._maxUploadedFiles <= this._uploadedFiles.length) : false;
  };
  @Input() set uploadedFiles(value: any[]) {
    this._uploadedFiles = value;
    this.isChooseButtonDisabled = this._uploadedFiles ? (this._maxUploadedFiles && this._maxUploadedFiles <= this._uploadedFiles.length) : false;
  }
  uploaderDisabled: boolean = false;
  @Input() set disabled(value: boolean) {
    this.uploaderDisabled = value;
  }
  _width: string;
  @Input() set width(value: string) {
    if (value && parseInt(value) >= 550) {
      this._width = value;
    }
  };

  @Input() height: string;
  @Input() chooseLabel: string = "Choose";
  @Input() scanText: string = 'Scan';
  @Input() removeAllText: string = 'Clean';
  @Input() accept: string;
  @Input() invalidFileTypeMessageDetail: string = 'Invalid File Type !';
  @Input() hasSelectedFile = true;
  @Input() isShowCancelButton: boolean = true;
  @Input() isShowFileName: boolean = true;
  @Input() maxFileSize = 100000000;
  @Input() invalidFileSizeMessageDetail: string = "Max File Size is " + (this.maxFileSize / 1024).toString() + " MB";
  @Input() isReadOnly: boolean = false;
  @Input() multiple?: boolean = false;
  @Input() isAllowEdit: boolean = true;
  @Input() isScanningAllowed: boolean = false;
  @Input() horizontalFiles: boolean = false;
  @Input() allowPreview: boolean;

  @Output() onFileEditClick = new EventEmitter();
  @Output() onFileUploaded = new EventEmitter();

  public get deletionTypes(): typeof DeletionTypes {
    return DeletionTypes;
  }
  constructor(
    public _DomSanitizer: DomSanitizer,
    private componentFactoryResolverService: ComponentFactoryResolverService,
    public viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    imagesScanned = [];
  }

  getContainerStyle() {
    return {
      'width': this._width,
      'max-width': this._width,
      'max-height': this.height,
    };
  }


  attachmentsHandler(event: any) {
    if (this._uploadedFiles == null || this._uploadedFiles == undefined) {
      this._uploadedFiles = new Array();
    }
    this.fileSource = event.files;
    let re: RegExp = /(?:\.([^.]+))?$/;
    this.fileSource.forEach(file => {
      let reader = new FileReader();
      let fileExtention: any = re.exec(file.name);
      reader.onload = () => {
        let string64: any = reader?.result?.toString();
        let attachment = {
          id: 0,
          fileAsBase64: string64,
          fileExtention: fileExtention[1],
          name: file.name,
          isNew: true,
          file: file
        };
        this._uploadedFiles.push(attachment);
        this.isChooseButtonDisabled = this._uploadedFiles ? (this._maxUploadedFiles && this._maxUploadedFiles <= this._uploadedFiles.length) : false;
        if (this.fileSource.indexOf(file) + 1 == this.fileSource.length) {
          this.fileSource = [];
          this.onFileUploaded.emit(this._uploadedFiles);
        }
      };
      reader.readAsDataURL(file);
    });
  }

  removeAttachment(index: any) {
    let deleteConfimationPopup = <ConfirmationPopupComponent>(this.componentFactoryResolverService.createPopup(ConfirmationPopupComponent, this.viewContainerRef));
    deleteConfimationPopup.open();
    let deleteSubscribtion = deleteConfimationPopup.onConfirmClick.subscribe(() => {
      this._uploadedFiles.splice(index, 1);
      this.isChooseButtonDisabled = this._uploadedFiles ? (this._maxUploadedFiles && this._maxUploadedFiles <= this._uploadedFiles.length) : false;
      this.onFileUploaded.emit(this._uploadedFiles);
      deleteSubscribtion.unsubscribe();
    });
  }

  removeAll() {
    if (!this.uploaderDisabled) {
      this._uploadedFiles = this._uploadedFiles.filter(
        f => (f.notAllowDelete = true)
      );
      this._uploadedFiles = this._uploadedFiles.filter(p => !p.isNew);
      this.isChooseButtonDisabled = this._uploadedFiles ? (this._maxUploadedFiles && this._maxUploadedFiles <= this._uploadedFiles.length) : false;
      this.onFileUploaded.emit(this._uploadedFiles);
    }
  }

  getIcon(file: any) {
    switch (file.fileExtention) {
      case "png":
      case "jpg":
      case "jpeg":
      case "jif":
      case "PNG":
      case "JPEG":
      case "svg":
      case "webp":
      case "WEBP":
      case "jfif":
      case "JFIF":
      case "gif":
      case "GIF":
        return file.fileAsBase64;
      case 'xlsx':
      case 'xls':
        return 'assets/file-icons/excel.png';
      case 'docx':
      case 'doc':
        return 'assets/file-icons/word.png';
      case 'zip':
      case 'rar':
        return 'assets/file-icons/rar.png';
      case 'txt':
        return 'assets/file-icons/notepad.png';
      case 'pdf':
        return 'assets/file-icons/pdf.png';
      default:
        return 'assets/file-icons/unknown.png'
    }
  }

  preview(file: any) {
    if (!this.allowPreview) {
      return;
    }
    switch (file.fileExtention) {
      case "png":
      case "jpg":
      case "jpeg":
      case "jif":
      case "PNG":
      case "JPEG":
      case "webp":
      case "WEBP":
      case "jfif":
      case "JFIF":
      case "gif":
      case "GIF":
        let image = new Image();
        image.src = file.fileAsBase64;
        let w: any = window.open("", "image", "width=600,height=800,left=500,scrollbars=yes,resizable=yes");
        w.document.write(image.outerHTML);
        w.document.close();
        break;
      case "pdf":
        var obj = document.createElement('object');
        obj.style.width = '100%';
        obj.style.height = '842pt';
        obj.type = 'application/pdf';
        obj.data = file.fileAsBase64;
        let ws: any = window.open('', "image", "width=600,height=800,left=500,scrollbars=yes,resizable=yes");
        ws.document.body.appendChild(obj);
        const linkSourcePdf = file.fileAsBase64;
        const downloadLinkPdf = document.createElement("a");
        const fileNamePdf = `${(file.fileName ? file.fileName : new Date().toString())}.${file.fileExtention}`;

        downloadLinkPdf.href = linkSourcePdf;
        downloadLinkPdf.download = fileNamePdf;
        downloadLinkPdf.click();
        break;
      default:
        const linkSource = file.fileAsBase64;
        const downloadLink = document.createElement("a");
        const fileName = `${(file.fileName ? file.fileName : new Date().toString())}.${file.fileExtention}`;

        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
        break;
    }
  }

  onDrop(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragOver(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  onDragLeave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  addScannedFiles = () => {
    if (this._uploadedFiles == null || this._uploadedFiles == undefined) {
      this._uploadedFiles = [];
    }
    for (var i = 0; (imagesScanned instanceof Array) && i < imagesScanned.length; i++) {
      var scannedImage = imagesScanned[i];
      let attachment =
      {
        id: 0,
        fileAsBase64: scannedImage.src,
        fileExtention: 'jpeg',
        name: 'scanned-image',
        isNew: true
      };
      this._uploadedFiles = [...this._uploadedFiles, attachment];
    }

    this.onFileUploaded.emit(this._uploadedFiles);
  }

  scan() {
    if (!this.uploaderDisabled) {
      scanner.scan(this.displayImagesOnPage,
        {
          "output_settings": [
            {
              "type": "return-base64",
              "format": "jpg"
            }
          ]
        }
      );
    }
  }

  displayImagesOnPage(successful: any, mesg: any, response: any) {
    // if (!successful) {
    //   this.popupCreationService.showErrorPopupMessage('Error', mesg);
    //   return;
    // }

    if (successful && mesg != null && mesg.toLowerCase().indexOf('user cancel') >= 0) {
      return;
    }

    var scannedImages = scanner.getScannedImages(response, true, false);
    for (var i = 0; (scannedImages instanceof Array) && i < scannedImages.length; i++) {
      imagesScanned.push(scannedImages[i]);
    }
    let submitScannedDocuments: any = document.getElementById('submitScannedDocuments');
    submitScannedDocuments.click();
  }

  editAttachment(image: any) {
    this.onFileEditClick.emit(image);
  }

  getIsAllowEdit(index: any) {
    switch (this._uploadedFiles[index].fileExtention) {
      case "png":
      case "PNG":
      case "jif":
      case "svg":
      case "JPG":
      case "jpg":
      case "jpeg":
      case "JPEG":
      case "webp":
      case "WEBP":
      case "jfif":
      case "JFIF":
      case "gif":
      case "GIF":
        return true;
      default:
        return false;
    }
  }
}
