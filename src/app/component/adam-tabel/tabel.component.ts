import { Component } from '@angular/core';
import { AdamLibTestService } from '../../service/adam-lib-test.service';

@Component({
  selector: 'tabel',
  standalone: false,
  templateUrl: './tabel.component.html',
  styleUrl: './tabel.component.scss'
})
export class TabelComponent {
  columns: any[] = [];
  items: any[] = [];
  icons: any[] = [];

  columns2: any[] = [];
  items2: any[] = [];
  items3: any[] = [];


  constructor(private adamLibTestService: AdamLibTestService) {
    this.getUsers();
    this.columns = [
      { field: "Col1", header: "Col 1" },
      { field: "Col2", header: "Col 2" },
      { field: "Col3", header: "Col 3" },
      { field: "Col4", header: "Col 4" },
      { field: "Col5", header: "Col 5" },
    ];
    this.items = [
      {
        'Col1': "Col11",
        'Col2': "Col11",
        'Col3': "Col11",
        'Col4': "Col11",
        'Col5': "Col11",
      },
      {
        'Col1': "Col11",
        'Col2': "Col11",
        'Col3': "Col11",
        'Col4': "Col11",
        'Col5': "Col11",
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
    ]
  }
  addUser() {
    console.log('addUser')
  }


  getUsers() {
    this.adamLibTestService.getUsers().subscribe(response => {
      console.log('response => ', response.dataObject)
      this.items3 = response.dataObject;
    }
    )
  }


}
