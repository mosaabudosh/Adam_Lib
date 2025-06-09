import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { AdamLibTestService } from '../../service/adam-lib-test.service';
import { AdamPopupComponent } from '../adam-popup/adam-popup.component';
import { AdamMessageService, AdamMessageType, ComponentFactoryResolverService } from 'adam-shared';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'tabel',
  templateUrl: './tabel.component.html',
  styleUrl: './tabel.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TabelComponent {
  columns: any[] = [];
  items: any[] = [];

  columns2: any[] = [];
  items2: any[] = [];
  items3: any[] = [];

  tabs: any[] = [
    { title: 'Tabel', value: 0 },
    { title: 'Master Details', value: 1 },
    { title: 'Tree Tabel', value: 2 }

  ];
  activeIndex: number = 1;
  products: TreeNode[] = [];
  products2: TreeNode[] = [];

  treeColumns: any[] = [];

  constructor(private adamLibTestService: AdamLibTestService,
    private componentFactoryResolverService: ComponentFactoryResolverService,
    public viewContainerRef: ViewContainerRef,
    private _adamMessageService: AdamMessageService) {
    // this.getUsers();
    this.treeColumns = [
      { field: "", header: "Images", isHasMultiImage: true, imagesPath: "images", width: '30%' },
      { field: "", header: "Image", isHasImage: true, imagePath: "image", width: '10%' },
      { field: "name", header: "Name", width: '10%' },
      { field: "size", header: "Size", width: '10%' },
      { field: "type", header: "Type", width: '10%' },
    ];
    this.columns = [
      { field: "", header: "Images", isHasMultiImage: true, imagesPath: "images", width: '10%' },
      { field: "", header: "Image", isHasImage: true, imagePath: "image", },
      { field: "Col1", header: "Col 1" },
      { field: "Col2", header: "Col 2" },
      { field: "Col3", header: "Col 3" },
    ];
    this.items = [
      {
        'images': ['../assets/images/dark-background-image.jpg', '../assets/images/avatar.png', '../assets/images/dark-background-image.jpg', '../assets/images/avatar.png', '../assets/images/dark-background-image.jpg', '../assets/images/avatar.png'],
        'image': '../assets/images/dark-background-image.jpg',
        'Col1': "Col11",
        'Col2': "Col11",
        'Col3': "Col11",
        "icons": this.generateIcons(true)
      },
      {
        'Col1': "Col11",
        'Col2': "Col11",
        'Col3': "Col11",
        'Col4': "Col11",
        'Col5': "Col11",
        "icons": this.generateIcons(false)
      }
    ];
    this.columns2 = [
      { field: "imagePath", header: "Image", isHasImage: true, imagePath: 'image' },
      { field: "mobileNumber", header: "Col 2" },
      { field: "firstName", header: "Col 3" },
      { field: "email", header: "Col 4" },
      { field: "Col5", header: "Col 5" },
    ];
    this.items2 = [
      {
        'image': '../assets/images/dark-background-image.jpg',
        'Col2': "Col11",
        'Col3': "Col11",
        'Col4': "Col11",
        'Col5': "Col11",
      },
      {
        'image': '../assets/images/normal-background-image.jpg',
        'Col2': "Col11",
        'Col3': "Col11",
        'Col4': "Col11",
        'Col5': "Col11",
      }
    ];
    this.getFileSystemNodesData();
  }

  getFilesystem() {
    // return Promise.resolve(this.getFileSystemNodesData());
  }

  onSelectionChanged(event: any) {
    this.activeIndex = event;
  }

  generateIcons(info?: any) {
    let icons = [
      {
        icon: 'pi pi-eye',
        tooltip: "View",
        color: 'white',
        visible: info,
        // command: (event: any) => {
        //   this.viewUser(info.userId)
        // }
      },
      {
        icon: 'pi pi-user-edit',
        tooltip: "Edit",
        color: 'white',
        visible: info,
        // command: (event: any) => {
        //   this.editUser(info.userId)
        // }
      },
      {
        icon: 'pi pi-lock',
        tooltip: "Lock",
        color: 'white',
        visible: info,
        // command: (event: any) => {
        //   this.lockUnLockUser(info.userId)
        // }
      },
      {
        icon: 'pi pi-unlock',
        tooltip: "Unlock",
        color: 'white',
        visible: info,
        // command: (event: any) => {
        //   this.lockUnLockUser(info.userId)
        // }
      },
      {
        icon: 'pi pi-trash',
        tooltip: "Delete",
        color: 'dangerous',
        visible: info,
        // command: (event: any) => {
        //   this.deleteUser(info.userId)
        // }
      }
    ];
    return icons.filter(p => p.visible);
  }

  addUser() {
    let adamPopupComponent = <AdamPopupComponent>this.componentFactoryResolverService.createPopup(AdamPopupComponent, this.viewContainerRef);
    adamPopupComponent.open();
    let adamPopupComponentSubscription = adamPopupComponent.onSubmitted.subscribe(response => {
      this._adamMessageService.showTost(AdamMessageType.Success, 'Success', 'Success Message Content');
      adamPopupComponentSubscription.unsubscribe();
    });
  }

  getUsers() {
    this.adamLibTestService.getUsers().subscribe(response => {
      this.items3 = response.dataObject;
    })
  }

  getFileSystemNodesData() {
    this.products = [
      {
        "data": {
          'images': ['../assets/images/dark-background-image.jpg', '../assets/images/avatar.png', '../assets/images/dark-background-image.jpg', '../assets/images/avatar.png', '../assets/images/dark-background-image.jpg', '../assets/images/avatar.png'],
          'image': '../assets/images/dark-background-image.jpg',
          "name": "Applications",
          "size": "200mb",
          "type": "Folder",
          "icons": this.generateIcons(true)
        },
        "children": [
          {
            "data": {
              "name": "Angular",
              "size": "25mb",
              "type": "Folder",
              "icons": this.generateIcons(true)
            },
            "children": [
              {
                "data": {
                  "name": "angular.app",
                  "size": "10mb",
                  "type": "Application",
                  "icons": this.generateIcons(true)
                }
              },
              {
                "data": {
                  "name": "cli.app",
                  "size": "10mb",
                  "type": "Application",
                  "icons": this.generateIcons(true)
                }
              },
              {
                "data": {
                  "name": "mobile.app",
                  "size": "5mb",
                  "type": "Application"
                }
              }
            ]
          },
          {
            "data": {
              "name": "editor.app",
              "size": "25mb",
              "type": "Application"
            }
          },
          {
            "data": {
              "name": "settings.app",
              "size": "50mb",
              "type": "Application"
            }
          }
        ]
      },
      {
        "data": {
          "images": [],
          'image': '../assets/images/dark-background-image.jpg',
          "name": "Cloud",
          "size": "20mb",
          "type": "Folder"
        },
        "children": [
          {
            "data": {
              "name": "backup-1.zip",
              "size": "10mb",
              "type": "Zip"
            }
          },
          {
            "data": {
              "name": "backup-2.zip",
              "size": "10mb",
              "type": "Zip"
            }
          }
        ]
      },
      {
        "data": {
          "images": [],
          'image': '',
          "name": "Desktop",
          "size": "150kb",
          "type": "Folder"
        },
        "children": [
          {
            "data": {
              "name": "note-meeting.txt",
              "size": "50kb",
              "type": "Text"
            }
          },
          {
            "data": {
              "name": "note-todo.txt",
              "size": "100kb",
              "type": "Text"
            }
          }
        ]
      },
      {
        "data": {
          "images": [],
          'image': '',
          "name": "Documents",
          "size": "75kb",
          "type": "Folder"
        },
        "children": [
          {
            "data": {
              "name": "Work",
              "size": "55kb",
              "type": "Folder"
            },
            "children": [
              {
                "data": {
                  "name": "Expenses.doc",
                  "size": "30kb",
                  "type": "Document"
                }
              },
              {
                "data": {
                  "name": "Resume.doc",
                  "size": "25kb",
                  "type": "Resume"
                }
              }
            ]
          },
          {
            "data": {
              "name": "Home",
              "size": "20kb",
              "type": "Folder"
            },
            "children": [
              {
                "data": {
                  "name": "Invoices",
                  "size": "20kb",
                  "type": "Text"
                }
              }
            ]
          }
        ]
      },
      {
        "data": {
          "images": [],
          'image': '',
          "name": "Downloads",
          "size": "25mb",
          "type": "Folder"
        },
        "children": [
          {
            "data": {
              "name": "Spanish",
              "size": "10mb",
              "type": "Folder"
            },
            "children": [
              {
                "data": {
                  "name": "tutorial-a1.txt",
                  "size": "5mb",
                  "type": "Text"
                }
              },
              {
                "data": {
                  "name": "tutorial-a2.txt",
                  "size": "5mb",
                  "type": "Text"
                }
              }
            ]
          },
          {
            "data": {
              "name": "Travel",
              "size": "15mb",
              "type": "Text"
            },
            "children": [
              {
                "data": {
                  "name": "Hotel.pdf",
                  "size": "10mb",
                  "type": "PDF"
                }
              },
              {
                "data": {
                  "name": "Flight.pdf",
                  "size": "5mb",
                  "type": "PDF"
                }
              }
            ]
          }
        ]
      },
      {
        "data": {
          "images": [],
          'image': '',
          "name": "Main",
          "size": "50mb",
          "type": "Folder"
        },
        "children": [
          {
            "data": {
              "name": "bin",
              "size": "50kb",
              "type": "Link"
            }
          },
          {
            "data": {
              "name": "etc",
              "size": "100kb",
              "type": "Link"
            }
          },
          {
            "data": {
              "name": "var",
              "size": "100kb",
              "type": "Link"
            }
          }
        ]
      },
      {
        "data": {
          "images": [],
          'image': '',
          "name": "Other",
          "size": "5mb",
          "type": "Folder"
        },
        "children": [
          {
            "data": {
              "name": "todo.txt",
              "size": "3mb",
              "type": "Text"
            }
          },
          {
            "data": {
              "name": "logo.png",
              "size": "2mb",
              "type": "Picture"
            }
          }
        ]
      },
      {
        "data": {
          "images": [],
          'image': '',
          "name": "Pictures",
          "size": "150kb",
          "type": "Folder"
        },
        "children": [
          {
            "data": {
              "name": "barcelona.jpg",
              "size": "90kb",
              "type": "Picture"
            }
          },
          {
            "data": {
              "name": "primeng.png",
              "size": "30kb",
              "type": "Picture"
            }
          },
          {
            "data": {
              "name": "prime.jpg",
              "size": "30kb",
              "type": "Picture"
            }
          }
        ]
      },
      {
        "data": {
          'images': ['../assets/images/dark-background-image.jpg', '../assets/images/avatar.png', '../assets/images/dark-background-image.jpg', '../assets/images/avatar.png', '../assets/images/dark-background-image.jpg', '../assets/images/avatar.png'],
          'image': '../assets/images/dark-background-image.jpg',
          "name": "Videos",
          "size": "1500mb",
          "type": "Folder"
        },
        "children": [
          {
            "data": {
              "name": "primefaces.mkv",
              "size": "1000mb",
              "type": "Video"
            }
          },
          {
            "data": {
              "name": "intro.avi",
              "size": "500mb",
              "type": "Video"
            }
          }
        ]
      }
    ]
  }

}
