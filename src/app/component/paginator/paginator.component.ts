import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PaginatorComponent {

  paginate(event: any) {
    console.log('event => ', event)
  }

}
