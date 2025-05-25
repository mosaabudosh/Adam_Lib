import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { AdamPickListComponent } from '../../../../projects/adam-shared/src/lib/controls/adam-pick-list/adam-pick-list.component';
import { PickList } from 'primeng/picklist';

@Component({
  selector: 'app-adam-pick-list',
  templateUrl: './adam-pick-list.component.html',
  styleUrl: './adam-pick-list.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PickListComponent {

  sources: any[] = [];
  targets: any[] = [];
  @ViewChild('pickList') pickList: PickList;
  selectedObj: any;

  constructor() {
    this.sources = [
      { id: 1, name: 'excluded 1' },
      { id: 2, name: 'excluded 2' },
      { id: 3, name: 'excluded 3' },
      { id: 4, name: 'excluded 4' },
      { id: 5, name: 'excluded 5' },
      { id: 6, name: 'excluded 6' },
      { id: 7, name: 'excluded 7' },
      { id: 8, name: 'excluded 8' },
      { id: 9, name: 'excluded 9' },
      { id: 10, name: 'excluded 10' },
      { id: 11, name: 'excluded 11' },
      { id: 12, name: 'excluded 12' },
      { id: 13, name: 'excluded 13' },
      { id: 14, name: 'excluded 14' },
      { id: 15, name: 'excluded 15' },
    ];
  }

  onAllMoveToTarget(event: any) {
    if (event.items.length > 0) {
      event.items.map((element: any) => {
        let indexOf = this.sources.indexOf(element);
        if (indexOf > -1) {
          this.sources.splice(indexOf, 1);
        }
        this.targets.push(element);
      });
    }
  }

  onAllMoveToSource(event: any) {
    if (event.items.length > 0) {
      event.items.map((element: any) => {
        let indexOf = this.targets.indexOf(element);
        if (indexOf > -1) {
          this.targets.splice(indexOf, 1);
        }
        this.sources.push(element);
      });
    }
  }

  onMoveToTarget(event: any) {
    if (event.items.length > 0) {
      let indexOf = this.sources.indexOf(event.items[0]);
      if (indexOf > -1) {
        this.sources.splice(indexOf, 1);
      }
    }
  }

  onMoveToSource(event: any) {
    if (event.items.length > 0) {
      let indexOf = this.targets.indexOf(event.items[0]);
      if (indexOf > -1) {
        this.targets.splice(indexOf, 1);
      }
    }
  }

  onClicked(pickList: AdamPickListComponent) {
    console.log(pickList)
  }

  targetSelectedChanged(event: any) {
    console.log(event.items[event.items.length - 1])
    this.selectedObj = event.items[event.items.length - 1];
  }
}
