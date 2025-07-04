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
  activeIndex: number = 0;
  products: TreeNode[] = [];
  products2: TreeNode[] = [];
  treeColumns: any[] = [];

  productsMasterDetail: any[] = [];
  productsMasterColumns: any[];
  productsDetailColumns: any[];
  expandedRows: any;

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
    this.productsMasterColumns = [
      { field: "id", header: "Id", visible: false },
      { field: "name", header: "Name" },
      { field: "image", header: "Image", isHasImage: true, imagePath: "image" },
      { field: "price", header: "Price" },
      { field: "category", header: "Category" },
      { field: "inventoryStatus", header: "Inventory Status" },
      { field: "rating", header: "Rating" },
    ];
    this.productsDetailColumns = [
      { field: "id", header: "Id", visible: false },
      { field: "customer", header: "Customer" },
      { field: "date", header: "Date" },
      { field: "amount", header: "Amount" },
      { field: "status", header: "Status" },
    ];
    this.getFileSystemNodesData();
    this.getMasterDetailData();

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

  getMasterDetailData() {
    this.productsMasterDetail = [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        icons: this.generateIcons(false),
        details: [
          {
            id: '1000-0',
            productCode: 'f230fh0g3',
            date: '2020-09-13',
            amount: 65,
            quantity: 1,
            customer: 'David James',
            status: 'PENDING',
            icons: this.generateIcons(true),
          },
          {
            id: '1000-1',
            productCode: 'f230fh0g3',
            date: '2020-05-14',
            amount: 130,
            quantity: 2,
            customer: 'Leon Rodrigues',
            status: 'DELIVERED'
          },
          {
            id: '1000-2',
            productCode: 'f230fh0g3',
            date: '2019-01-04',
            amount: 65,
            quantity: 1,
            customer: 'Juan Alejandro',
            status: 'RETURNED'
          },
          {
            id: '1000-3',
            productCode: 'f230fh0g3',
            date: '2020-09-13',
            amount: 195,
            quantity: 3,
            customer: 'Claire Morrow',
            status: 'CANCELLED'
          }
        ]
      },
      {
        id: '1001',
        code: 'nvklal433',
        name: 'Black Watch',
        description: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/black-watch.jpg',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'INSTOCK',
        rating: 4,
        icons: this.generateIcons(true),
        details: [
          {
            id: '1001-0',
            productCode: 'nvklal433',
            date: '2020-05-14',
            amount: 72,
            quantity: 1,
            customer: 'Maisha Jefferson',
            status: 'DELIVERED'
          },
          {
            id: '1001-1',
            productCode: 'nvklal433',
            date: '2020-02-28',
            amount: 144,
            quantity: 2,
            customer: 'Octavia Murillo',
            status: 'PENDING'
          }
        ]
      },
      {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Blue Band',
        description: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/blue-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3,
        details: [
          {
            id: '1002-0',
            productCode: 'zz21cz3c1',
            date: '2020-07-05',
            amount: 79,
            quantity: 1,
            customer: 'Stacey Leja',
            status: 'DELIVERED'
          },
          {
            id: '1002-1',
            productCode: 'zz21cz3c1',
            date: '2020-02-06',
            amount: 79,
            quantity: 1,
            customer: 'Ashley Wickens',
            status: 'DELIVERED'
          }
        ]
      },
      {
        id: '1003',
        code: '244wgerg2',
        name: 'Blue T-Shirt',
        description: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/blue-t-shirt.jpg',
        price: 29,
        category: 'Clothing',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        details: []
      },
      {
        id: '1004',
        code: 'h456wer53',
        name: 'Bracelet',
        description: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/bracelet.jpg',
        price: 15,
        category: 'Accessories',
        quantity: 73,
        inventoryStatus: 'INSTOCK',
        rating: 4,
        details: [
          {
            id: '1004-0',
            productCode: 'h456wer53',
            date: '2020-09-05',
            amount: 60,
            quantity: 4,
            customer: 'Mayumi Misaki',
            status: 'PENDING'
          },
          {
            id: '1004-1',
            productCode: 'h456wer53',
            date: '2019-04-16',
            amount: 2,
            quantity: 30,
            customer: 'Francesco Salvatore',
            status: 'DELIVERED'
          }
        ]
      },
      {
        id: '1005',
        code: 'av2231fwg',
        name: 'Brown Purse',
        description: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/brown-purse.jpg',
        price: 120,
        category: 'Accessories',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4,
        details: [
          {
            id: '1005-0',
            productCode: 'av2231fwg',
            date: '2020-01-25',
            amount: 120,
            quantity: 1,
            customer: 'Isabel Sinclair',
            status: 'RETURNED'
          },
          {
            id: '1005-1',
            productCode: 'av2231fwg',
            date: '2019-03-12',
            amount: 240,
            quantity: 2,
            customer: 'Lionel Clifford',
            status: 'DELIVERED'
          },
          {
            id: '1005-2',
            productCode: 'av2231fwg',
            date: '2019-05-05',
            amount: 120,
            quantity: 1,
            customer: 'Cody Chavez',
            status: 'DELIVERED'
          }
        ]
      },
      {
        id: '1006',
        code: 'bib36pfvm',
        name: 'Chakra Bracelet',
        description: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/chakra-bracelet.jpg',
        price: 32,
        category: 'Accessories',
        quantity: 5,
        inventoryStatus: 'LOWSTOCK',
        rating: 3,
        details: [
          {
            id: '1006-0',
            productCode: 'bib36pfvm',
            date: '2020-02-24',
            amount: 32,
            quantity: 1,
            customer: 'Arvin Darci',
            status: 'DELIVERED'
          },
          {
            id: '1006-1',
            productCode: 'bib36pfvm',
            date: '2020-01-14',
            amount: 64,
            quantity: 2,
            customer: 'Izzy Jones',
            status: 'PENDING'
          }
        ]
      },
      {
        id: '1007',
        code: 'mbvjkgip5',
        name: 'Galaxy Earrings',
        description: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/galaxy-earrings.jpg',
        price: 34,
        category: 'Accessories',
        quantity: 23,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        details: [
          {
            id: '1007-0',
            productCode: 'mbvjkgip5',
            date: '2020-06-19',
            amount: 34,
            quantity: 1,
            customer: 'Jennifer Smith',
            status: 'DELIVERED'
          }
        ]
      },
      {
        id: '1008',
        code: 'vbb124btr',
        name: 'Game Controller',
        description: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/game-controller.jpg',
        price: 99,
        category: 'Electronics',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 4,
        details: [
          {
            id: '1008-0',
            productCode: 'vbb124btr',
            date: '2020-01-05',
            amount: 99,
            quantity: 1,
            customer: 'Jeanfrancois David',
            status: 'DELIVERED'
          },
          {
            id: '1008-1',
            productCode: 'vbb124btr',
            date: '2020-01-19',
            amount: 198,
            quantity: 2,
            customer: 'Ivar Greenwood',
            status: 'RETURNED'
          }
        ]
      },
      {
        id: '1009',
        code: 'cm230f032',
        name: 'Gaming Set',
        description: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/gaming-set.jpg',
        price: 299,
        category: 'Electronics',
        quantity: 63,
        inventoryStatus: 'INSTOCK',
        rating: 3,
        details: [
          {
            id: '1009-0',
            productCode: 'cm230f032',
            date: '2020-06-24',
            amount: 299,
            quantity: 1,
            customer: 'Kadeem Mujtaba',
            status: 'PENDING'
          },
          {
            id: '1009-1',
            productCode: 'cm230f032',
            date: '2020-05-11',
            amount: 299,
            quantity: 1,
            customer: 'Ashley Wickens',
            status: 'DELIVERED'
          },
          {
            id: '1009-2',
            productCode: 'cm230f032',
            date: '2019-02-07',
            amount: 299,
            quantity: 1,
            customer: 'Julie Johnson',
            status: 'DELIVERED'
          },
          {
            id: '1009-3',
            productCode: 'cm230f032',
            date: '2020-04-26',
            amount: 299,
            quantity: 1,
            customer: 'Tony Costa',
            status: 'CANCELLED'
          }
        ]
      },
      {
        id: '1010',
        code: 'plb34234v',
        name: 'Gold Phone Case',
        description: 'Product Description',
        image: 'https://primefaces.org/cdn/primeng/images/demo/product/gold-phone-case.jpg',
        price: 24,
        category: 'Accessories',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4,
        details: [
          {
            id: '1010-0',
            productCode: 'plb34234v',
            date: '2020-02-04',
            amount: 24,
            quantity: 1,
            customer: 'James Butt',
            status: 'DELIVERED'
          },
          {
            id: '1010-1',
            productCode: 'plb34234v',
            date: '2020-05-05',
            amount: 48,
            quantity: 2,
            customer: 'Josephine Darakjy',
            status: 'DELIVERED'
          }
        ]
      },
      // {
      //   id: '1011',
      //   code: '4920nnc2d',
      //   name: 'Green Earbuds',
      //   description: 'Product Description',
      //   image: 'green-earbuds.jpg',
      //   price: 89,
      //   category: 'Electronics',
      //   quantity: 23,
      //   inventoryStatus: 'INSTOCK',
      //   rating: 4,
      //   details: [
      //     {
      //       id: '1011-0',
      //       productCode: '4920nnc2d',
      //       date: '2020-06-01',
      //       amount: 89,
      //       quantity: 1,
      //       customer: 'Art Venere',
      //       status: 'DELIVERED'
      //     }
      //   ]
      // },
      // {
      //   id: '1012',
      //   code: '250vm23cc',
      //   name: 'Green T-Shirt',
      //   description: 'Product Description',
      //   image: 'green-t-shirt.jpg',
      //   price: 49,
      //   category: 'Clothing',
      //   quantity: 74,
      //   inventoryStatus: 'INSTOCK',
      //   rating: 5,
      //   details: [
      //     {
      //       id: '1012-0',
      //       productCode: '250vm23cc',
      //       date: '2020-02-05',
      //       amount: 49,
      //       quantity: 1,
      //       customer: 'Lenna Paprocki',
      //       status: 'DELIVERED'
      //     },
      //     {
      //       id: '1012-1',
      //       productCode: '250vm23cc',
      //       date: '2020-02-15',
      //       amount: 49,
      //       quantity: 1,
      //       customer: 'Donette Foller',
      //       status: 'PENDING'
      //     }
      //   ]
      // },
      // {
      //   id: '1013',
      //   code: 'fldsmn31b',
      //   name: 'Grey T-Shirt',
      //   description: 'Product Description',
      //   image: 'grey-t-shirt.jpg',
      //   price: 48,
      //   category: 'Clothing',
      //   quantity: 0,
      //   inventoryStatus: 'OUTOFSTOCK',
      //   rating: 3,
      //   details: [
      //     {
      //       id: '1013-0',
      //       productCode: 'fldsmn31b',
      //       date: '2020-04-01',
      //       amount: 48,
      //       quantity: 1,
      //       customer: 'Simona Morasca',
      //       status: 'DELIVERED'
      //     }
      //   ]
      // },
      // {
      //   id: '1014',
      //   code: 'waas1x2as',
      //   name: 'Headphones',
      //   description: 'Product Description',
      //   image: 'headphones.jpg',
      //   price: 175,
      //   category: 'Electronics',
      //   quantity: 8,
      //   inventoryStatus: 'LOWSTOCK',
      //   rating: 5,
      //   details: [
      //     {
      //       id: '1014-0',
      //       productCode: 'waas1x2as',
      //       date: '2020-05-15',
      //       amount: 175,
      //       quantity: 1,
      //       customer: 'Lenna Paprocki',
      //       status: 'DELIVERED'
      //     },
      //     {
      //       id: '1014-1',
      //       productCode: 'waas1x2as',
      //       date: '2020-01-02',
      //       amount: 175,
      //       quantity: 1,
      //       customer: 'Donette Foller',
      //       status: 'CANCELLED'
      //     }
      //   ]
      // },
      // {
      //   id: '1015',
      //   code: 'vb34btbg5',
      //   name: 'Light Green T-Shirt',
      //   description: 'Product Description',
      //   image: 'light-green-t-shirt.jpg',
      //   price: 49,
      //   category: 'Clothing',
      //   quantity: 34,
      //   inventoryStatus: 'INSTOCK',
      //   rating: 4,
      //   details: [
      //     {
      //       id: '1015-0',
      //       productCode: 'vb34btbg5',
      //       date: '2020-07-02',
      //       amount: 98,
      //       quantity: 2,
      //       customer: 'Mitsue Tollner',
      //       status: 'DELIVERED'
      //     }
      //   ]
      // },
      // {
      //   id: '1016',
      //   code: 'k8l6j58jl',
      //   name: 'Lime Band',
      //   description: 'Product Description',
      //   image: 'lime-band.jpg',
      //   price: 79,
      //   category: 'Fitness',
      //   quantity: 12,
      //   inventoryStatus: 'INSTOCK',
      //   rating: 3,
      //   details: []
      // },
      // {
      //   id: '1017',
      //   code: 'v435nn85n',
      //   name: 'Mini Speakers',
      //   description: 'Product Description',
      //   image: 'mini-speakers.jpg',
      //   price: 85,
      //   category: 'Clothing',
      //   quantity: 42,
      //   inventoryStatus: 'INSTOCK',
      //   rating: 4,
      //   details: [
      //     {
      //       id: '1017-0',
      //       productCode: 'v435nn85n',
      //       date: '2020-07-12',
      //       amount: 85,
      //       quantity: 1,
      //       customer: 'Minna Amigon',
      //       status: 'DELIVERED'
      //     }
      //   ]
      // },
      // {
      //   id: '1018',
      //   code: '09zx9c0zc',
      //   name: 'Painted Phone Case',
      //   description: 'Product Description',
      //   image: 'painted-phone-case.jpg',
      //   price: 56,
      //   category: 'Accessories',
      //   quantity: 41,
      //   inventoryStatus: 'INSTOCK',
      //   rating: 5,
      //   details: [
      //     {
      //       id: '1018-0',
      //       productCode: '09zx9c0zc',
      //       date: '2020-07-01',
      //       amount: 56,
      //       quantity: 1,
      //       customer: 'Abel Maclead',
      //       status: 'DELIVERED'
      //     },
      //     {
      //       id: '1018-1',
      //       productCode: '09zx9c0zc',
      //       date: '2020-05-02',
      //       amount: 56,
      //       quantity: 1,
      //       customer: 'Minna Amigon',
      //       status: 'RETURNED'
      //     }
      //   ]
      // },
      // {
      //   id: '1019',
      //   code: 'mnb5mb2m5',
      //   name: 'Pink Band',
      //   description: 'Product Description',
      //   image: 'pink-band.jpg',
      //   price: 79,
      //   category: 'Fitness',
      //   quantity: 63,
      //   inventoryStatus: 'INSTOCK',
      //   rating: 4,
      //   details: []
      // },
      // {
      //   id: '1020',
      //   code: 'r23fwf2w3',
      //   name: 'Pink Purse',
      //   description: 'Product Description',
      //   image: 'pink-purse.jpg',
      //   price: 110,
      //   category: 'Accessories',
      //   quantity: 0,
      //   inventoryStatus: 'OUTOFSTOCK',
      //   rating: 4,
      //   details: [
      //     {
      //       id: '1020-0',
      //       productCode: 'r23fwf2w3',
      //       date: '2020-05-29',
      //       amount: 110,
      //       quantity: 1,
      //       customer: 'Kiley Caldarera',
      //       status: 'DELIVERED'
      //     },
      //     {
      //       id: '1020-1',
      //       productCode: 'r23fwf2w3',
      //       date: '2020-02-11',
      //       amount: 220,
      //       quantity: 2,
      //       customer: 'Graciela Ruta',
      //       status: 'DELIVERED'
      //     }
      //   ]
      // },
      // {
      //   id: '1021',
      //   code: 'pxpzczo23',
      //   name: 'Purple Band',
      //   description: 'Product Description',
      //   image: 'purple-band.jpg',
      //   price: 79,
      //   category: 'Fitness',
      //   quantity: 6,
      //   inventoryStatus: 'LOWSTOCK',
      //   rating: 3,
      //   details: [
      //     {
      //       id: '1021-0',
      //       productCode: 'pxpzczo23',
      //       date: '2020-02-02',
      //       amount: 79,
      //       quantity: 1,
      //       customer: 'Cammy Albares',
      //       status: 'DELIVERED'
      //     }
      //   ]
      // },
      // {
      //   id: '1022',
      //   code: '2c42cb5cb',
      //   name: 'Purple Gemstone Necklace',
      //   description: 'Product Description',
      //   image: 'purple-gemstone-necklace.jpg',
      //   price: 45,
      //   category: 'Accessories',
      //   quantity: 62,
      //   inventoryStatus: 'INSTOCK',
      //   rating: 4,
      //   details: [
      //     {
      //       id: '1022-0',
      //       productCode: '2c42cb5cb',
      //       date: '2020-06-29',
      //       amount: 45,
      //       quantity: 1,
      //       customer: 'Mattie Poquette',
      //       status: 'DELIVERED'
      //     },
      //     {
      //       id: '1022-1',
      //       productCode: '2c42cb5cb',
      //       date: '2020-02-11',
      //       amount: 135,
      //       quantity: 3,
      //       customer: 'Meaghan Garufi',
      //       status: 'DELIVERED'
      //     }
      //   ]
      // },
      // {
      //   id: '1023',
      //   code: '5k43kkk23',
      //   name: 'Purple T-Shirt',
      //   description: 'Product Description',
      //   image: 'purple-t-shirt.jpg',
      //   price: 49,
      //   category: 'Clothing',
      //   quantity: 2,
      //   inventoryStatus: 'LOWSTOCK',
      //   rating: 5,
      //   details: [
      //     {
      //       id: '1023-0',
      //       productCode: '5k43kkk23',
      //       date: '2020-04-15',
      //       amount: 49,
      //       quantity: 1,
      //       customer: 'Gladys Rim',
      //       status: 'RETURNED'
      //     }
      //   ]
      // },
      // {
      //   id: '1024',
      //   code: 'lm2tny2k4',
      //   name: 'Shoes',
      //   description: 'Product Description',
      //   image: 'shoes.jpg',
      //   price: 64,
      //   category: 'Clothing',
      //   quantity: 0,
      //   inventoryStatus: 'INSTOCK',
      //   rating: 4,
      //   details: []
      // },
      // {
      //   id: '1025',
      //   code: 'nbm5mv45n',
      //   name: 'Sneakers',
      //   description: 'Product Description',
      //   image: 'sneakers.jpg',
      //   price: 78,
      //   category: 'Clothing',
      //   quantity: 52,
      //   inventoryStatus: 'INSTOCK',
      //   rating: 4,
      //   details: [
      //     {
      //       id: '1025-0',
      //       productCode: 'nbm5mv45n',
      //       date: '2020-02-19',
      //       amount: 78,
      //       quantity: 1,
      //       customer: 'Yuki Whobrey',
      //       status: 'DELIVERED'
      //     },
      //     {
      //       id: '1025-1',
      //       productCode: 'nbm5mv45n',
      //       date: '2020-05-21',
      //       amount: 78,
      //       quantity: 1,
      //       customer: 'Fletcher Flosi',
      //       status: 'PENDING'
      //     }
      //   ]
      // },
      // {
      //   id: '1026',
      //   code: 'zx23zc42c',
      //   name: 'Teal T-Shirt',
      //   description: 'Product Description',
      //   image: 'teal-t-shirt.jpg',
      //   price: 49,
      //   category: 'Clothing',
      //   quantity: 3,
      //   inventoryStatus: 'LOWSTOCK',
      //   rating: 3,
      //   details: [
      //     {
      //       id: '1026-0',
      //       productCode: 'zx23zc42c',
      //       date: '2020-04-24',
      //       amount: 98,
      //       quantity: 2,
      //       customer: 'Bette Nicka',
      //       status: 'DELIVERED'
      //     }
      //   ]
      // },
      // {
      //   id: '1027',
      //   code: 'acvx872gc',
      //   name: 'Yellow Earbuds',
      //   description: 'Product Description',
      //   image: 'yellow-earbuds.jpg',
      //   price: 89,
      //   category: 'Electronics',
      //   quantity: 35,
      //   inventoryStatus: 'INSTOCK',
      //   rating: 3,
      //   details: [
      //     {
      //       id: '1027-0',
      //       productCode: 'acvx872gc',
      //       date: '2020-01-29',
      //       amount: 89,
      //       quantity: 1,
      //       customer: 'Veronika Inouye',
      //       status: 'DELIVERED'
      //     },
      //     {
      //       id: '1027-1',
      //       productCode: 'acvx872gc',
      //       date: '2020-06-11',
      //       amount: 89,
      //       quantity: 1,
      //       customer: 'Willard Kolmetz',
      //       status: 'DELIVERED'
      //     }
      //   ]
      // },
      // {
      //   id: '1028',
      //   code: 'tx125ck42',
      //   name: 'Yoga Mat',
      //   description: 'Product Description',
      //   image: 'yoga-mat.jpg',
      //   price: 20,
      //   category: 'Fitness',
      //   quantity: 15,
      //   inventoryStatus: 'INSTOCK',
      //   rating: 5,
      //   details: []
      // },
      // {
      //   id: '1029',
      //   code: 'gwuby345v',
      //   name: 'Yoga Set',
      //   description: 'Product Description',
      //   image: 'yoga-set.jpg',
      //   price: 20,
      //   category: 'Fitness',
      //   quantity: 25,
      //   inventoryStatus: 'INSTOCK',
      //   rating: 8,
      //   details: [
      //     {
      //       id: '1029-0',
      //       productCode: 'gwuby345v',
      //       date: '2020-02-14',
      //       amount: 4,
      //       quantity: 80,
      //       customer: 'Maryann Royster',
      //       status: 'DELIVERED'
      //     }
      //   ]
      // }
    ];

    this.expandedRows = this.productsMasterDetail.reduce((acc, p) => (acc[p.id] = true) && acc, {});

  }
}
